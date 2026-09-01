import { useState } from 'react'
import { UiFormContainer } from '@spm/components/dedicated/UiFormContainer'
import ComponentDemoLayout from '../../../components/ComponentDemoLayout'
import { SegmentedToggle } from '../../../components/ui/SegmentedToggle'
import { ControlBar } from '../../../components/ui/ControlBar'

export default function UiFormContainerPage() {
  const [layout, setLayout] = useState<'card' | 'compact' | 'hero'>('card')
  const [formValues, setFormValues] = useState<Record<string, any>>({
    email: 'admin@stripe.internal',
    remember: true,
  })
  const [formErrors] = useState<Record<string, string>>({})
  const [submissionState, setSubmissionState] = useState<{
    isSubmitted: boolean
    values: Record<string, any>
    timestamp: string
  } | null>(null)

  const handleFieldChange = (fieldId: string, value: any) => {
    setFormValues((prev) => ({ ...prev, [fieldId]: value }))
  }

  const handleFormSubmit = (values: Record<string, any>, e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmissionState({
      isSubmitted: true,
      values,
      timestamp: new Date().toISOString().substring(11, 19),
    })
  }

  const vnrExample = `reconstruct "#auth-form" -> UiFormContainer {
  layout: "${layout}";
  activeTabId: "login";
  forgotPasswordUrl: "/recover";

  tabs: [
    {
      id: "login",
      label: "Sign In",
      title: "Enterprise SSO Access",
      subTitle: "Authenticate with your corporate identity provider",
      submitLabel: "Authenticate Workspace",
      actionUrl: "/api/v1/auth/login",
      fields: [
        { id: "email", label: "Work Email", type: "email", required: true, placeholder: "alex@enterprise.io" },
        { id: "password", label: "Password / SSO Pin", type: "password", required: true }
      ]
    },
    {
      id: "register",
      label: "Provision Workspace",
      title: "Provision Organization Account",
      subTitle: "Deploy dedicated tenant cluster on SPM infrastructure",
      submitLabel: "Deploy Cluster",
      actionUrl: "/api/v1/auth/provision",
      fields: [
        { id: "orgName", label: "Organization Name", type: "text", required: true, placeholder: "Acme Corp" },
        { id: "email", label: "Admin Email", type: "email", required: true },
        { id: "environment", label: "Target Region", type: "select" }
      ]
    }
  ];
}`

  const propsContract = [
    { name: 'title', type: 'string', desc: 'Main title displayed at the top of the form.' },
    { name: 'subTitle', type: 'string', desc: 'Subtitle or description text below the title.' },
    { name: 'layout', type: '"card" | "compact" | "hero"', desc: 'Visual layout variant container (default: "card").' },
    { name: 'tabs', type: 'FormTab[]', desc: 'Array of form tabs containing tab-specific fields, titles, and actions.' },
    { name: 'activeTabId', type: 'string', desc: 'ID of the tab that is selected by default.' },
    { name: 'fields', type: 'FormField[]', desc: 'Input fields rendered inside the current form view.' },
    { name: 'values', type: 'Record<string, any>', desc: 'Controlled form state values.' },
    { name: 'errors', type: 'Record<string, string>', desc: 'Validation error messages per field.' },
    { name: 'onChange', type: '(fieldId: string, val: any) => void', desc: 'Change handler callback for controlled inputs.' },
    { name: 'onSubmit', type: '(values, e) => void', desc: 'Form submission event handler.' },
    { name: 'headerSlot / footerSlot / actionsSlot', type: 'React.ReactNode', desc: 'Custom layout slot containers.' },
    { name: 'renderField', type: 'Function', desc: 'Custom field rendering callback.' },
    { name: 'submitLabel', type: 'string', desc: 'Text for the primary action submit button.' },
    { name: 'actionUrl', type: 'string', desc: 'Target endpoint URL for standard form submission.' },
    { name: 'method', type: 'string', desc: 'HTTP method used by the form (default: POST).' },
    { name: 'hiddenInputs', type: 'Record<string, string>', desc: 'Hidden key-value inputs preserved for CSRF tokens or session state.' },
    { name: 'forgotPasswordUrl', type: 'string', desc: 'URL for password recovery link.' },
    { name: 'secondaryLink', type: '{ label: string; url: string }', desc: 'Custom auxiliary action link at the bottom of the card.' },
  ]

  const useCases = [
    'Reconstruct monolithic authentication workflows into tabbed enterprise cards.',
    'Preserve original form actions, hidden security tokens, and query parameters without backend edits.',
    'Provide accessible, reactive tab switching between Sign In, Workspace Provisioning, and Recovery links.',
  ]

  const controls = (
    <ControlBar align="between" style={{ borderRadius: '8px', border: '1px solid var(--border-contrast)', width: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
          Layout:
        </span>
        <SegmentedToggle
          size="sm"
          options={[
            { id: 'card', label: 'Card' },
            { id: 'compact', label: 'Compact' },
            { id: 'hero', label: 'Hero' },
          ]}
          value={layout}
          onChange={(val) => setLayout(val as 'card' | 'compact' | 'hero')}
        />
      </div>
      <div style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
        UiFormContainer Spec v2.4
      </div>
    </ControlBar>
  )

  const containerWidth = layout === 'compact' ? 440 : layout === 'hero' ? 680 : 540

  return (
    <ComponentDemoLayout
      name="UiFormContainer"
      category="Dedicated Components"
      description="Enterprise authentication and input form card component supporting multi-tab navigation, customizable fields, CSRF input preservation, and recovery links."
      vnrExample={vnrExample}
      docUrl="/src/docs/UiFormContainer.md"
      propsContract={propsContract}
      useCases={useCases}
      controls={controls}
    >
      <div style={{ width: '100%', maxWidth: containerWidth, margin: '0 auto', transition: 'all 0.25s ease-in-out' }}>
        <UiFormContainer
          layout={layout}
          activeTabId="login"
          forgotPasswordUrl="/recover"
          values={formValues}
          errors={formErrors}
          onChange={handleFieldChange}
          onSubmit={handleFormSubmit}
          tabs={[
            {
              id: 'login',
              label: 'Sign In',
              title: 'Enterprise SSO Access',
              subTitle: 'Authenticate with your corporate identity provider to access system telemetry.',
              submitLabel: 'Authenticate Workspace',
              actionUrl: '#login',
              fields: [
                { id: 'email', label: 'Work Email Address', type: 'email', required: true, placeholder: 'admin@stripe.internal' },
                { id: 'password', label: 'SSO Security Pin', type: 'password', required: true, placeholder: '••••••••••••' },
                { id: 'remember', label: 'Remember device authorization', type: 'checkbox' },
              ],
            },
            {
              id: 'register',
              label: 'Provision Workspace',
              title: 'Provision Organization Cluster',
              subTitle: 'Deploy dedicated isolated tenant infrastructure powered by SPM compiler runtime.',
              submitLabel: 'Deploy Organization Cluster',
              actionUrl: '#register',
              fields: [
                { id: 'orgName', label: 'Organization Identifier', type: 'text', required: true, placeholder: 'Acme Global Inc' },
                { id: 'email', label: 'Admin Technical Contact', type: 'email', required: true, placeholder: 'sysadmin@acme.com' },
                {
                  id: 'role',
                  label: 'Cluster Environment',
                  type: 'select',
                  options: [
                    { label: 'Production (US-East)', value: 'us-east' },
                    { label: 'Production (EU-Central)', value: 'eu-central' },
                    { label: 'Staging Sandbox', value: 'staging' },
                  ],
                },
                { id: 'password', label: 'Access Token Secret', type: 'password', required: true },
              ],
            },
            {
              id: 'reset',
              label: 'Identity Recovery',
              title: 'Account Identity Recovery',
              subTitle: 'Enter your verified work email address to initiate magic link re-authentication.',
              submitLabel: 'Send Recovery Email',
              actionUrl: '#reset',
              fields: [
                { id: 'resetEmail', label: 'Registered Work Email', type: 'email', required: true, placeholder: 'user@organization.io' },
              ],
            },
          ]}
        />

        {/* State Inspector Box */}
        <div style={{ marginTop: '2rem', padding: '16px', background: 'var(--bg-surface)', border: '1px solid var(--border-contrast)', borderRadius: '8px', fontFamily: 'var(--font-mono)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', borderBottom: '1px solid var(--border-contrast)', paddingBottom: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: '#ffffff', letterSpacing: '0.05em', textTransform: 'uppercase' }}>State Inspector</span>
            </div>
            <span
              style={{
                fontSize: 10,
                padding: '2px 8px',
                borderRadius: 3,
                background: submissionState ? '#ffffff' : 'var(--bg-element)',
                color: submissionState ? '#000000' : 'var(--text-muted)',
                fontWeight: 700,
                border: '1px solid var(--border-contrast)',
              }}
            >
              {submissionState ? `SUBMITTED [${submissionState.timestamp}]` : 'STATUS: IDLE'}
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', fontSize: 12 }}>
            <div>
              <span style={{ color: 'var(--text-subtle)', display: 'block', marginBottom: '4px', fontSize: 11 }}>Form State (Controlled):</span>
              <pre style={{ margin: 0, padding: '10px', background: 'var(--bg-absolute)', color: '#ffffff', border: '1px solid var(--border-contrast)', borderRadius: '4px', overflowX: 'auto', fontSize: 11 }}>
                {JSON.stringify(formValues, null, 2)}
              </pre>
            </div>

            <div>
              <span style={{ color: 'var(--text-subtle)', display: 'block', marginBottom: '4px', fontSize: 11 }}>Last Submission Payload:</span>
              <pre style={{ margin: 0, padding: '10px', background: 'var(--bg-absolute)', color: submissionState ? '#ffffff' : 'var(--text-subtle)', border: '1px solid var(--border-contrast)', borderRadius: '4px', overflowX: 'auto', fontSize: 11 }}>
                {submissionState ? JSON.stringify(submissionState.values, null, 2) : '// Awaiting submission action'}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </ComponentDemoLayout>
  )
}
