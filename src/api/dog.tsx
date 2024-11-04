import axios from 'axios';

export const fetchDogImage = async (breed: string): Promise<string | null> => {
    try {
        const response = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`);
        return response.data.message;
    } catch (error) {
        console.error("Error fetching dog image:", error);
        return null;
    }
};

export const fetchBreeds = async (): Promise<string[]> => {
    try {
        const response = await axios.get('https://dog.ceo/api/breeds/list/all');
        return Object.keys(response.data.message);
    } catch (error) {
        console.error("Error fetching breed list:", error);
        return [];
    }
};
