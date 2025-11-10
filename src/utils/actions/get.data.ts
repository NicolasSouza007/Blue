export async function getDataHome() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects/68f2ef9aa8c41dcd6687103c?pretty=true&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata,`
    );
    if (!res.ok) {
      throw new Error("Failed to fecth data");
    }
    return res.json();
  } catch (err) {
    throw new Error("Failed to fecth data");
  }
}
