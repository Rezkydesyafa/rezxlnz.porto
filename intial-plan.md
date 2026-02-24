# SPEC.md - Personal Portfolio: Mohamad Dwi Rezky Desyafa

## 1. Project Overview

Pembangunan website portofolio profesional untuk **Backend & AI Engineer**. Sistem ini dirancang sebagai "Digital Headquarters" yang menampilkan resume, galeri proyek teknis, dan jurnal tulisan menggunakan estetika minimalis, dark-mode, dan performa tinggi sesuai blueprint desain Figma.

## 2. Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Content Management:** MDX (via Contentlayer)
- **Fonts:** \* **Inter:** Primary UI & Body text.
  - **JetBrains Mono:** Metadata, labels, tech stack, dan code snippets.
- **Development Tools:**
  - **MCP Figma:** Digunakan untuk ekstraksi token desain (warna, spacing, elemen) langsung dari file desain.
  - **MCP Context:** Digunakan untuk sinkronisasi konteks desain ke dalam lingkungan kode editor (IDE).

## 3. Architecture & Project Structure

Menggunakan pola arsitektur modular Next.js dengan pemisahan antara komponen UI statis dan pengolah data MDX.

```text
src/
├── app/                  # Routes & Layouts (Server Components)
│   ├── (main)/           # Persistent Sidebar layout group
│   ├── projects/         # Dynamic [slug] for project details
│   ├── writings/         # Dynamic [slug] for articles
├── components/           # UI Components (Atomic Design)
│   ├── sidebar/          # Profile, Nav, Availability Status
│   ├── cards/            # Project & Writing cards
│   └── shared/           # Motion wrappers & common UI
├── content/              # Source MDX files
├── data/                 # JSON/TS local DB for Experience & Stack
├── hooks/                # Custom hooks for i18n & scroll
└── lib/                  # Metadata, MDX Parsers, & MCP Context Config
```

## 4. Core Features

- **Design-to-Code Sync (MCP):** Integrasi langsung dengan Figma untuk memastikan akurasi _spacing_ (padding/margin) dan _color palette_ (Zinc/Gray shades).
- **Internationalization (i18n):** Toggle bahasa ID | ENG dengan persistensi state.
- **Content Engine:** Otomatisasi rendering dari file MDX untuk menu "Projects" dan "Writings".
- **Responsive Sidebar:** Sidebar tetap di sisi kiri (Desktop) dan bertransisi menjadi menu navigasi atas/overlay (Mobile).
- **Interactive Staggered Motion:** Animasi masuk berurutan pada elemen list (Experience & Stack) untuk meningkatkan _user engagement_.
- **Availability Indicator:** Status visual "Available for Hire" yang dinamis.

## 5. UI & Design Specifications

- **Visual Style:** Dark-themed, grid-based, high contrast.
- **Typography Implementation:**
- `font-sans` (Inter): Nama utama, deskripsi "About", dan isi artikel.
- `font-mono` (JetBrains Mono): Role title, badges teknis, tanggal, dan username (@rezxlnz).

- **Specific Elements (From Design):**
- **Stack Badges:** Minimalis, tanpa ikon (text-only dalam font-mono).
- **Experience Timeline:** Garis vertikal tipis dengan indikator status "Present".

## 6. App Flow

1. **Phase 1 (Design Ingestion):** Menggunakan **MCP Figma** untuk memetakan variabel CSS ke dalam `tailwind.config.ts`.
2. **Phase 2 (Layouting):** Membangun `RootLayout` dengan Sidebar tetap dan area konten utama yang dibungkus `AnimatePresence`.
3. **Phase 3 (Routing):** \* `/` : Home (Summary, Experience, Stack, Featured Projects).

- `/projects` : Full gallery dengan filter kategori.
- `/writings` : Blog feed.

4. **Phase 4 (Refinement):** Implementasi **MCP Context** untuk memastikan tiap komponen yang dibuat tetap sinkron dengan spesifikasi desain terakhir di Figma.

## 7. Assumptions

- **MCP Usage:** Diasumsikan editor (seperti Cursor/VSCode) memiliki akses ke server MCP Figma dan Context untuk membaca metadata desain secara real-time.
- **Static Rendering:** Mengingat data jarang berubah, seluruh halaman akan menggunakan _Static Site Generation_ (SSG) untuk kecepatan maksimal.
- **Assets:** Gambar proyek disimpan secara lokal di folder `/public` atau menggunakan layanan optimasi gambar Next.js.
- **Contact:** Tombol LinkedIn dan Email pada desain akan langsung mengarah ke tautan eksternal yang relevan.

---
