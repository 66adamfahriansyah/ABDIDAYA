/**
 * E-BIO PENS — Renderer: Media Sosial
 * Menggenerasi postingan feed Instagram kotak dan kartu video YouTube
 */

// 1. Postingan Instagram Reels (Tampilan Langsung di Landing Page)
function renderInstagramPosts() {
  const container = document.getElementById('instagram-posts-container');
  if (!container || !EBIO_DATA.instagramPosts) return;

  container.innerHTML = EBIO_DATA.instagramPosts.map((post, idx) => `
    <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-soft hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col group card-shimmer reveal" style="transition-delay: ${idx * 110}ms;">
      
      <!-- Top Bar: Instagram Profile & Reel Label -->
      <div class="px-4 py-3 bg-slate-50/90 dark:bg-slate-800/90 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-full p-[1.5px] bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-600 shrink-0">
            <div class="w-full h-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center p-1">
              <svg class="w-full h-full text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
          </div>
          <div>
            <div class="text-xs font-bold text-slate-900 dark:text-white leading-tight">ppko.ebiopens</div>
            <div class="text-[10px] text-slate-500 font-mono">${post.postNum}</div>
          </div>
        </div>
        <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-pink-50 dark:bg-pink-950/50 text-pink-700 dark:text-pink-300 text-[10px] font-bold border border-pink-200/60 dark:border-pink-800/50">
          <svg class="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          <span>Reels</span>
        </span>
      </div>

      <!-- Live Interactive Instagram Embed Iframe -->
      <div class="relative w-full h-[450px] sm:h-[480px] bg-slate-950 overflow-hidden flex items-center justify-center">
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

      <!-- Card Bottom: Title & Action -->
      <div class="p-4 bg-white dark:bg-slate-900 flex-1 flex flex-col justify-between border-t border-slate-100 dark:border-slate-800">
        <div>
          <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-1">
            ${post.tag}
          </span>
          <h4 class="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white line-clamp-2 leading-snug group-hover:text-emerald-600 transition-colors">
            ${post.title}
          </h4>
        </div>
        <div class="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <span class="text-[11px] text-slate-400 font-medium font-mono">${post.date || 'Instagram'}</span>
          <a href="${post.url}" target="_blank" rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white text-[11px] font-bold shadow-sm transition-all hover:scale-105">
            <span>Buka di IG</span>
            <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
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
