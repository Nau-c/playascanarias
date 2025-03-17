import axios from "axios";
import * as cheerio from "cheerio";

export async function getCanterasCapacity() {
  try {
    const response = await axios.get(
      "https://lpamar.laspalmasgc.es/las-playas/monitor-de-ocupacion-de-playas/?locale=es"
    );
    const $ = cheerio.load(response.data);

    // You'll need to adjust these selectors based on the actual HTML structure
    const capacityText = $(".capacity-percentage").text();
    const lastUpdate = $(".last-update").text();

    return {
      current: parseInt(capacityText),
      percentage: parseInt(capacityText),
      lastUpdate: lastUpdate,
    };
  } catch (error) {
    console.error("Error fetching beach capacity:", error);
    return null;
  }
}

export async function getBeachOccupancy(beachName: string): Promise<BeachOccupancy | null> {
  try {
    const response = await axios.get(
      "https://lpamar.laspalmasgc.es/las-playas/monitor-de-ocupacion-de-playas/?locale=es"
    );
    const $ = cheerio.load(response.data);

    if (beachName === "Playa de La Laja") {
      const sectors = [
        {
          name: "Sector Norte",
          percentage: parseOccupancyData($, 'laja-norte')
        },
        {
          name: "Sector Central Norte",
          percentage: parseOccupancyData($, 'laja-centro-norte')
        },
        {
          name: "Sector Central Sur",
          percentage: parseOccupancyData($, 'laja-centro-sur')
        },
        {
          name: "Sector Sur",
          percentage: parseOccupancyData($, 'laja-sur')
        }
      ];

      return {
        sectors,
        lastUpdate: $('.last-update').text().trim()
      };
    }

    // You'll need to adjust these selectors based on the actual HTML structure
    const capacityText = $(".capacity-percentage").text();
    const lastUpdate = $(".last-update").text();

    return {
      current: parseInt(capacityText),
      percentage: parseInt(capacityText),
      lastUpdate: lastUpdate,
    };
  } catch (error) {
    console.error("Error fetching beach occupancy:", error);
    return null;
  }
}
