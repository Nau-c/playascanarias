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
