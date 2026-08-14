function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

const KEYWORDS = new Set([
  'class', 'reconstruct', 'extends', 'child', 'bind', 'theme', 'selector',
  'preserve', 'scope', 'action', 'media', 'variables', 'customStyles',
  'import', 'export', 'from', 'function', 'const', 'let', 'var', 'return', 'if', 'else',
  'on', 'push', 'branches', 'jobs', 'runs-on', 'steps', 'uses', 'name', 'run'
])

const COMMAND_KEYWORDS = new Set([
  'spm', 'compile', 'dev', 'publish', 'install', 'npm', 'run', 'build', 'git', 'checkout', 'cd'
])

function colorizeCommandLine(line: string): string {
  const CMD_REGEX = /(#.*|\b(?:spm|compile|dev|publish|install|npm|run|build|git|checkout|cd)\b|r#"[^"]*"#|"[^"]*"|'[^']*')/g

  let lastIndex = 0
  let result = ''
  let match: RegExpExecArray | null

  while ((match = CMD_REGEX.exec(line)) !== null) {
    const prefix = line.substring(lastIndex, match.index)
    result += escapeHtml(prefix)

    const token = match[0]
    if (token.startsWith('#')) {
      result += `<span class="syn-comment">${escapeHtml(token)}</span>`
    } else if (token.startsWith('"') || token.startsWith("'")) {
      result += `<span class="syn-string">${escapeHtml(token)}</span>`
    } else if (COMMAND_KEYWORDS.has(token)) {
      result += `<span class="syn-cmd">${escapeHtml(token)}</span>`
    } else {
      result += escapeHtml(token)
    }

    lastIndex = CMD_REGEX.lastIndex
  }

  result += escapeHtml(line.substring(lastIndex))
  return result
}

function colorizeCodeLine(line: string): string {
  const TOKEN_REGEX = /(r#"[^"]*"#|"[^"]*"|'[^']*'|\/\/[^\n]*|\b(?:class|reconstruct|extends|child|bind|theme|selector|preserve|scope|action|media|variables|customStyles|import|export|from|function|const|let|var|return|if|else|on|push|branches|jobs|runs-on|steps|uses|name|run)\b|\b(?:Ui[A-Za-z0-9]+|DocumentRow|FileRow|BaseMediaItem|DetailedFileRow|UserProfileCard|TableRowItem)\b|\b(?:text|html|hiddenInputs|attr:[a-zA-Z0-9_-]+)\b|->|\||\b[a-zA-Z0-9_-]+(?=\s*:))/g

  let lastIndex = 0
  let result = ''
  let match: RegExpExecArray | null

  while ((match = TOKEN_REGEX.exec(line)) !== null) {
    const prefix = line.substring(lastIndex, match.index)
    result += escapeHtml(prefix)

    const token = match[0]

    if (token.startsWith('"') || token.startsWith("'") || token.startsWith('r#"')) {
      result += `<span class="syn-string">${escapeHtml(token)}</span>`
    } else if (token.startsWith('//')) {
      result += `<span class="syn-comment">${escapeHtml(token)}</span>`
    } else if (KEYWORDS.has(token)) {
      result += `<span class="syn-keyword">${escapeHtml(token)}</span>`
    } else if (token.startsWith('Ui') || ['DocumentRow', 'FileRow', 'BaseMediaItem', 'DetailedFileRow', 'UserProfileCard', 'TableRowItem'].includes(token)) {
      result += `<span class="syn-class">${escapeHtml(token)}</span>`
    } else if (['text', 'html', 'hiddenInputs'].includes(token) || token.startsWith('attr:')) {
      result += `<span class="syn-prop">${escapeHtml(token)}</span>`
    } else if (token === '->' || token === '|') {
      result += `<span class="syn-operator">${escapeHtml(token)}</span>`
    } else {
      result += `<span class="syn-prop">${escapeHtml(token)}</span>`
    }

    lastIndex = TOKEN_REGEX.lastIndex
  }

  result += escapeHtml(line.substring(lastIndex))
  return result
}

export function highlightCodeBlock(code: string): string {
  const lines = code.trim().split('\n')
  return lines.map(line => {
    const trimmed = line.trim()

    // 1. Comment lines (# or // or /*)
    if (trimmed.startsWith('#') || trimmed.startsWith('//') || trimmed.startsWith('/*') || trimmed.startsWith('*')) {
      return `<span class="syn-comment">${escapeHtml(line)}</span>`
    }

    // 2. Command lines (spm, ./spm, npm, git, cd)
    if (trimmed.startsWith('spm ') || trimmed.startsWith('./spm') || trimmed.startsWith('npm ') || trimmed.startsWith('git ') || trimmed.startsWith('cd ')) {
      return colorizeCommandLine(line)
    }

    // 3. Regular code line
    return colorizeCodeLine(line)
  }).join('\n')
}
