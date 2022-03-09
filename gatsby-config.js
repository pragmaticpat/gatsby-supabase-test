module.exports = {
  siteMetadata: {
    title: `new`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-source-supabase`,
      options: {
        supabaseUrl: "https://flfseohiplobywyaogfo.supabase.co",
        supabaseKey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNDM4NDUzMSwiZXhwIjoxOTQ5OTYwNTMxfQ.jRNbDSkMgzRgGhNLIfeKaTP5cY7qZlJHXorZofs4Mq8",
        types: [
          {
            type: "Quiz",
            query: (client) => client.from("Quizzes").select("*"),
          },
        ],
      },
    },
  ],
};
