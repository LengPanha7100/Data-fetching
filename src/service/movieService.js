export const getAllMovice = async () => {
    const request = await fetch("https://movie-api-get-only-bmc3.vercel.app/api", { cache: "no-store" });
    const movie = await request.json();
    return movie.payload;
};

export const getTypeAction = async (genre) => {
    const request = await fetch(`https://movie-api-get-only-bmc3.vercel.app/api?genre=${genre}`, { cache: "no-store" });
    const movie = await request.json();
    return movie.payload;
};
