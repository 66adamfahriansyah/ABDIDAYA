/**
 * E-BIO PENS — Master Data Store
 * Menggabungkan seluruh data modul (Hero, Farming, Press, Legal, Social, Team, Catalog)
 * ke dalam objek sentral `EBIO_DATA` secara aman dan reaktif.
 */

const EBIO_DATA = {
  get heroStats() {
    return typeof heroStatsData !== 'undefined' ? heroStatsData : [];
  },
  get smartFarmingComponents() {
    return typeof smartFarmingComponentsData !== 'undefined' ? smartFarmingComponentsData : [];
  },
  get systemWorkflow() {
    return typeof systemWorkflowData !== 'undefined' ? systemWorkflowData : [];
  },
  get systemBenefits() {
    return typeof systemBenefitsData !== 'undefined' ? systemBenefitsData : [];
  },
  get pressArticles() {
    return typeof pressArticlesData !== 'undefined' ? pressArticlesData : [];
  },
  get legalItems() {
    return typeof legalItemsData !== 'undefined' ? legalItemsData : [];
  },
  get phtUnit() {
    return typeof phtUnitData !== 'undefined' ? phtUnitData : null;
  },
  get instagramPosts() {
    return typeof instagramPostsData !== 'undefined' ? instagramPostsData : [];
  },
  get youtubeVideos() {
    return typeof youtubeVideosData !== 'undefined' ? youtubeVideosData : [];
  },
  get youtubeChannel() {
    return typeof youtubeChannelData !== 'undefined' ? youtubeChannelData : {
      name: "PPKO E-BIO PENS",
      handle: "@PPKOE-BIOPENS",
      channelId: "UCCd546i23bmMdQc01U7Cbag",
      url: "https://www.youtube.com/@PPKOE-BIOPENS"
    };
  },
  get teamDivisions() {
    return typeof teamDivisionsData !== 'undefined' ? teamDivisionsData : [];
  },
  get catalogDocuments() {
    return typeof catalogDocumentsData !== 'undefined' ? catalogDocumentsData : [];
  },
  get mapDeployment() {
    return typeof mapDeploymentData !== 'undefined' ? mapDeploymentData : null;
  }
};

if (typeof window !== 'undefined') {
  window.EBIO_DATA = EBIO_DATA;
}
