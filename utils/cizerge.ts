export async function createCizerge(ders:string,giris:string,cikis:string) {
    const res = await fetch(`/api/cizerge?secret=${process.env.SECRET_TOKEN}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        
      },
      body: JSON.stringify({ ders, giris, cikis }),
    });
    const { cizerge } = await res.json();
    return cizerge;
  }
  
  export async function editDers(id:string, data:any) {
    const res = await fetch(`/api/cizerge/${id}secret=${process.env.SECRET_TOKEN}`, {
      method: "PATCH",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(data),
  
    })
    const { cizerge } = await res.json();
    return cizerge;
  }
  export async function deleteCizerge(id:string) {
    const res = await fetch(`/api/cizerge/${id}?secret=${process.env.SECRET_TOKEN}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { cizerge } = await res.json();
    return cizerge;
  }
  