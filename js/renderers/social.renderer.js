/**
 * E-BIO PENS — Renderer: Media Sosial
 * Menggenerasi postingan feed Instagram kotak dan kartu video YouTube
 */

// 1. Postingan Instagram Reels (Tampilan 3 Feed Utama - Bersih & Proporsional)
function renderInstagramPosts() {
  const container = document.getElementById('instagram-posts-container');
  if (!container || !EBIO_DATA.instagramPosts) return;

  container.innerHTML = EBIO_DATA.instagramPosts.map((post, idx) => `
    <div class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col group reveal" style="transition-delay: ${idx * 120}ms;">
      
      <!-- Instagram Reel Live Embed Container (Proporsional & Bebas Bingkai Bertumpuk) -->
      <div class="relative w-full h-[540px] sm:h-[580px] bg-slate-950 flex items-center justify-center">
        <iframe src="https://www.instagram.com/reel/${post.id}/embed"
          class="w-full h-full border-0"
          frameborder="0"
          scrolling="no"
          allowtransparency="true"
          loading="lazy"
          title="${post.title}"
          allow="encrypted-media; clipboard-write;">
        </iframe>
      </div>

      <!-- Keterangan Minimalis & Link Langsung -->
      <div class="p-3.5 sm:p-4 bg-white dark:bg-slate-900 flex items-center justify-between gap-3 border-t border-slate-100 dark:border-slate-800">
        <div class="min-w-0 flex-1">
          <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-0.5">
            ${post.tag}
          </span>
          <h4 class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate" title="${post.title}">
            ${post.title}
          </h4>
        </div>
        <a href="${post.url}" target="_blank" rel="noopener noreferrer"
          class="shrink-0 inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold transition-colors">
          <span>Lihat</span>
          <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>

    </div>
  `).join('');
}

// 2. Video YouTube
function renderYoutubeVideos() {
  const container = document.getElementById('youtube-videos-container');
  if (!container || !EBIO_DATA.youtubeVideos) return;

  container.innerHTML = EBIO_DATA.youtubeVideos.map((video, idx) => `
    <div class="bg-white rounded-3xl border border-slate-100 shadow-soft hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 overflow-hidden group card-shimmer reveal flex flex-col justify-between" style="transition-delay: ${idx * 110}ms;">
      <div>
        <div onclick="openVideoPlayerModal('${video.embedUrl}', '${video.title.replace(/'/g, "\\'")}')" class="relative aspect-video w-full bg-slate-900 overflow-hidden cursor-pointer">
          <img src="${video.thumbnail}" alt="${video.alt}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
          <div class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
            <div class="w-12 h-12 rounded-full bg-red-600/95 group-hover:bg-red-600 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
              <svg class="w-5 h-5 fill-current translate-x-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
          <span class="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-sm text-emerald-400 text-[10px] font-bold tracking-wider uppercase border border-white/10">
            ${video.badge || 'YouTube'}
          </span>
          <span class="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/80 text-white text-[10px] font-mono font-medium">
            ${video.duration || 'YouTube'}
          </span>
        </div>
        <div class="p-5">
          <div class="flex items-center gap-1.5 text-[11px] font-semibold text-slate-400 mb-1.5">
            <svg class="w-3.5 h-3.5 text-red-600 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            <span>${video.meta}</span>
          </div>
          <h4 onclick="openVideoPlayerModal('${video.embedUrl}', '${video.title.replace(/'/g, "\\'")}')" class="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors cursor-pointer leading-snug line-clamp-2">
            ${video.title}
          </h4>
          <p class="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
            ${video.desc || ''}
          </p>
        </div>
      </div>
      <div class="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between mt-1">
        <button onclick="openVideoPlayerModal('${video.embedUrl}', '${video.title.replace(/'/g, "\\'")}')" class="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors">
          <svg class="w-3.5 h-3.5 fill-current text-red-600" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          <span>Tonton Video</span>
        </button>
        <a href="${video.url}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-400 hover:text-red-600 transition-colors" title="Buka langsung di YouTube">
          <span>YouTube</span>
          <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
        </a>
      </div>
    </div>
  `).join('');
}
