import settings from '@/settings.json';
import parseContent from "@/utils/parseContent";

export default async function loadContent() {
    return new Promise((resolve, reject) => {
        fetch(settings.apiUrl, {headers: {Authorization: `Bearer ${settings.apiKey}`}})
            .then(response => response.json())
            .then(data => {
                if (data['records']) {
                    console.log(data['records']);
                    parseContent(data['records']);
                    return resolve(0);
                }
                return reject(1);
            })
            .catch(() => {
                return reject(1);
            });
    });
}