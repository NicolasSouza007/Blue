export async function getDataHome() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects/68f2ef9aa8c41dcd6687103c?pretty=true&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata,`,
      { next: { revalidate: 120 } }
    );
    if (!res.ok) {
      throw new Error("Failed to fecth data");
    }
    return res.json();
  } catch (err) {
    throw new Error("Failed to fecth data");
  }
}

export async function getSubMenu() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects?pretty=true&query=%7B%22type%22:%22pages%22%7D&limit=10&skip=0&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,`,
      { next: { revalidate: 120 } }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch menu data");
    }

    return res.json();
  } catch (err) {
    throw new Error("Failed to fetch menu data");
  }
}

export async function getItemBySlug(itemSklug: string) {
  const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/objects`;

  // Definindo a query para buscar o item pelo slug

  const queryParams = new URLSearchParams({
    query: JSON.stringify({ slug: itemSklug }),

    props: "slug,title,content,metadata,",
    read_key: process.env.READ_KEY as string,
  });

  const url = `${baseUrl}?${queryParams.toString()}`;

  try {
    const res = await fetch(url, { next: { revalidate: 120 } });

    if (!res.ok) {
      throw new Error("Failed to get item by slug");
    }
    return res.json();
  } catch (err) {
    throw new Error("Failed get item by slug");
  }
}
