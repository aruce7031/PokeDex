export const resJson = async (url :string) => {
    const res = await fetch(url);
    const resJson = await res.json();
    return resJson;
}