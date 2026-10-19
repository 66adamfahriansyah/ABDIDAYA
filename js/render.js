/**
 * E-BIO PENS — Master Component Renderer Hub
 * Mengorkestrasi seluruh modul renderer antarmuka:
 * - renderers/hero.renderer.js    : Statistik Hero
 * - renderers/farming.renderer.js : Komponen Alat, Alur Kerja, Manfaat
 * - renderers/press.renderer.js   : Liputan Media Massa & TV
 * - renderers/legal.renderer.js   : Legalitas HKI & Unit PHT
 * - renderers/social.renderer.js  : Feed Instagram & Kanal YouTube
 * - renderers/team.renderer.js    : Divisi Tim Inovasi
 * - renderers/catalog.renderer.js : Modal Berkas Dokumen Resmi
 */

const EBIORenderer = {
  renderHeroStats: () => typeof renderHeroStats === 'function' && renderHeroStats(),
  renderSmartFarmingComponents: () => typeof renderSmartFarmingComponents === 'function' && renderSmartFarmingComponents(),
  renderSystemWorkflow: () => typeof renderSystemWorkflow === 'function' && renderSystemWorkflow(),
  renderSystemBenefits: () => typeof renderSystemBenefits === 'function' && renderSystemBenefits(),
  renderPressArticles: () => typeof renderPressArticles === 'function' && renderPressArticles(),
  renderLegalItems: () => typeof renderLegalItems === 'function' && renderLegalItems(),
  renderPhtUnit: () => typeof renderPhtUnit === 'function' && renderPhtUnit(),
  renderInstagramPosts: () => typeof renderInstagramPosts === 'function' && renderInstagramPosts(),
  renderYoutubeVideos: () => typeof renderYoutubeVideos === 'function' && renderYoutubeVideos(),
  renderTeamDivisions: () => typeof renderTeamDivisions === 'function' && renderTeamDivisions(),
  renderCatalogDocuments: () => typeof renderCatalogDocuments === 'function' && renderCatalogDocuments(),
  renderDeploymentMapSection: () => typeof renderDeploymentMapSection === 'function' && renderDeploymentMapSection(),
  renderHeader: () => typeof renderHeader === 'function' && renderHeader(),
  renderFooter: () => typeof renderFooter === 'function' && renderFooter(),

  // Eksekusi Semua Rendering Antarmuka
  initAll: function () {
    this.renderHeader();
    this.renderHeroStats();
    this.renderSmartFarmingComponents();
    this.renderSystemWorkflow();
    this.renderSystemBenefits();
    this.renderDeploymentMapSection();
    this.renderPressArticles();
    this.renderLegalItems();
    this.renderPhtUnit();
    this.renderInstagramPosts();
    this.renderYoutubeVideos();
    this.renderTeamDivisions();
    this.renderCatalogDocuments();
    this.renderFooter();
  }
};

if (typeof window !== 'undefined') {
  window.EBIORenderer = EBIORenderer;
}
