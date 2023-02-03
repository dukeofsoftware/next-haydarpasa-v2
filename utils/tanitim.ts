import { TOKEN } from './token';
export async function deleteNew(id: string) {
  const res = await fetch(`/api/tanitim/${id}?secret=${TOKEN}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const { tanitim } = await res.json();
  return tanitim;
}
