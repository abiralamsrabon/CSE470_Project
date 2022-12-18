const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '6da898e234af53efc709a363753ff1f2',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;