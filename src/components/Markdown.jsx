// Minimal markdown renderer for lesson content: ## / ### headings, paragraphs,
// "- " lists, "> " callouts, | tables |, **bold** and *emphasis*.
function inline(text, keyBase) {
  const parts = []
  const re = /(\*\*[^*]+\*\*|\*[^*]+\*)/g
  let last = 0
  let m
  let i = 0
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index))
    const t = m[0]
    parts.push(t.startsWith('**') ? <strong key={`${keyBase}-${i++}`}>{t.slice(2, -2)}</strong> : <em key={`${keyBase}-${i++}`}>{t.slice(1, -1)}</em>)
    last = m.index + t.length
  }
  if (last < text.length) parts.push(text.slice(last))
  return parts
}

export default function Markdown({ source }) {
  const lines = source.trim().split('\n')
  const blocks = []
  let i = 0
  while (i < lines.length) {
    const line = lines[i]
    if (!line.trim()) { i++; continue }
    if (line.startsWith('### ')) { blocks.push(<h3 key={i}>{inline(line.slice(4), i)}</h3>); i++; continue }
    if (line.startsWith('## ')) { blocks.push(<h2 key={i}>{inline(line.slice(3), i)}</h2>); i++; continue }
    if (line.startsWith('> ')) {
      const buf = []
      while (i < lines.length && lines[i].startsWith('> ')) buf.push(lines[i++].slice(2))
      blocks.push(<blockquote key={`q${i}`}>{inline(buf.join(' '), `q${i}`)}</blockquote>)
      continue
    }
    if (/^(- |\d+\. )/.test(line)) {
      const ordered = /^\d+\. /.test(line)
      const items = []
      while (i < lines.length && /^(- |\d+\. )/.test(lines[i])) items.push(lines[i++].replace(/^(- |\d+\. )/, ''))
      const Tag = ordered ? 'ol' : 'ul'
      blocks.push(
        <Tag key={`l${i}`} className={ordered ? 'counter-list' : ''}>
          {items.map((it, j) => <li key={j}>{inline(it, `l${i}-${j}`)}</li>)}
        </Tag>
      )
      continue
    }
    if (line.startsWith('|')) {
      const rows = []
      while (i < lines.length && lines[i].startsWith('|')) rows.push(lines[i++])
      const cells = (r) => r.split('|').slice(1, -1).map((c) => c.trim())
      const [head, , ...body] = rows
      blocks.push(
        <div key={`t${i}`} className="overflow-x-auto rounded-xl border border-white/[0.07]">
          <table className="!my-0">
            <thead><tr>{cells(head).map((c, j) => <th key={j}>{inline(c, `th${j}`)}</th>)}</tr></thead>
            <tbody>{body.map((r, k) => <tr key={k}>{cells(r).map((c, j) => <td key={j}>{inline(c, `td${k}${j}`)}</td>)}</tr>)}</tbody>
          </table>
        </div>
      )
      continue
    }
    const buf = []
    while (i < lines.length && lines[i].trim() && !/^(#|> |- |\d+\. |\|)/.test(lines[i])) buf.push(lines[i++])
    blocks.push(<p key={`p${i}`}>{inline(buf.join(' '), `p${i}`)}</p>)
  }
  return <div className="prose-car">{blocks}</div>
}
