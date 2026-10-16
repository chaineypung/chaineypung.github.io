CHENXU PENG — ACADEMIC HOMEPAGE

This is a buildless static website for https://chaineypung.github.io/.
Open index.html to preview the homepage. No installation or build is required.

CONTENTS
index.html                  Homepage content
assets/style.css            Desktop and mobile styles
assets/main.js              Mobile navigation and section highlighting
assets/images/              Public GitHub portrait and real paper thumbnails
evita/                      Original project directory, preserved byte for byte
.nojekyll                   Serve the website directly with GitHub Pages
maintenance-dates.json      Editorial date notes for future updates
asset-sources.json          Sources for the paper illustrations
evita-preservation.json     Checksums of the preserved original project files

PUBLISH TO THE EXISTING REPOSITORY
1. Unzip the package.
2. Copy the contents of academic-homepage/ into the root of
   chaineypung/chaineypung.github.io on the main branch.
3. Keep the existing evita/ directory. The included copy is the same original
   version and does not need to replace the copy already in the repository.
4. In GitHub Settings > Pages, publish from the main branch and / (root).
5. After the deployment completes, visit https://chaineypung.github.io/.

UPDATE CONTENT
News from 2024 to 2026 is fully visible, without filters or an internal scroll box.
Competition records from 2020 to 2026 are expanded by year.
The Google Scholar link is listed in the sidebar.
Edit index.html to update the biography, publications, News, and experiences.
For a new News item, add an li with data-year="YYYY" inside .news-list.
Use a time element with datetime="YYYY-MM-DD" and visible text YYYY.MM.DD.
Keep paper thumbnails in assets/images/ and use descriptive alt text.

CONTENT NOTES
The homepage is in English. Research interests cover multimodal model design
and video generation.
Official paper titles keep the wording of their published records.
News dates are shown to the day. Known exact publication/project dates were
retained. For entries with incomplete evidence, day-level dates were added
under the owner's instruction. See maintenance-dates.json before using these
as historical evidence. Some competition dates correspond to the deadline,
final leaderboard, or workshop rather than an individual award announcement.
The two 2026 competitions still marked PlaceHolder in the source profile
are omitted from the awards list pending confirmed results.

The layout takes inspiration from https://likyoo.github.io/; the implementation
is new, with responsive layout, accessible navigation, and no external font,
tracking, or framework dependency.
