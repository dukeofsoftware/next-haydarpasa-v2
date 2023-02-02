export async function createNews(title:string,content:string,imageURL:string) {
    const res = await fetch(`/api/posts?secret=${process.env.SECRET_TOKEN}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        
      },
      body: JSON.stringify({ title, content, imageURL }),
    });
    const { post } = await res.json();
    return post;
  }
  export async function editNew(id:string, data:any) {
    const res = await fetch(`/api/posts/${id}?secret=${process.env.SECRET_TOKEN}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
  
    })
    const { post } = await res.json();
    return post;
  }
  export async function deleteNew(id:string) {
    const res = await fetch(`/api/posts/${id}?secret=${process.env.SECRET_TOKEN}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { post } = await res.json();
    return post;
  }