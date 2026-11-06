// Calls to the Flask API. In development Vite forwards /api to Flask (see vite.config.js).

export async function createAssessment(measurements) {
  const response = await fetch('/api/assessments', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(measurements),
  })

  if (response.status === 400) {
    const data = await response.json()
    return { errors: data.errors }
  }
  if (!response.ok) {
    throw new Error(`Server error ${response.status}`)
  }
  return { result: await response.json() }
}