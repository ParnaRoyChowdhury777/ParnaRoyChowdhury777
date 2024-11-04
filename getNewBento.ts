const apiUrl = "https://opbento.edgexhq.tech/api/bento?n=Parna%20Roy%20Chowdhury&g=ParnaRoyChowdhury777&x=Parna55&l=parna-roy-chowdhury-756331256&i=https%3A%2F%2Fgithub.com%2Faccount&p=https%3A%2F%2Fportfolio-parnaroychowdhury777.vercel.app%2F&z=b17c8";
interface BentoResponse {
  url: string;
}

const fetchBentoUrl = async (apiUrl: string): Promise<string> => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: BentoResponse = await response.json();
    return data.url;
  } catch (error) {
    console.error("Error fetching Bento URL:", error);
    throw error;
  }
};


// @ts-expect-error
fetchBentoUrl(apiUrl);
