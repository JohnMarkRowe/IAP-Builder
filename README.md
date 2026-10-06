Builds, maintains, allows printing, an Incident Action Plan.  It is fairly specific to Arkansas.

**Live app:** https://johnmarkrowe.github.io/IAP-Builder/

## Usage notes

IAP Builder is a single HTML file (`index.html`). There is nothing to install and no server: open the live link, or download the file and open it in a current browser (Chrome, Edge, Firefox, Safari). It works offline once loaded.

### Quick start

1. **+ New incident.** Enter the incident name, number, type, location, jurisdiction/agency, declaration number, when it began, and the first operational period. These print in the header of every form, in every page footer, and in the PDF filename.
2. **Fill in ICS 203 first.** Mark each position *Filled*, *Not activated*, or *Needed - unfilled* and enter a name, agency and contact. Every other form then shows an **Ask:** banner naming who owns that information (for example the COML for ICS 205/205A/217A/309). If the owner is not filled, the banner says so and names the fallback.
3. **Work through the forms as information comes in.** Everything autosaves as you type.
4. **Preview / Print IAP** shows the assembled plan and a list of open items (no objectives, no COML, no hospitals, edited-after-signing, and so on). **Print / Save as PDF** uses the browser's print dialog.
5. **+ Next period** starts the next operational period and copies the plan forward so you only edit what changed. Approval is cleared; message logs (213, 213RR, 309) start empty.
6. **Mark approved** locks a period against edits; **Unlock** reopens it.

### Forms included

| Always available | As needed (add as many as you need) | Incident-level |
|---|---|---|
| ICS 202 Objectives | ICS 213 General Message | ICS 201 Briefing |
| ICS 203 Organization Assignment List | ICS 213RR Resource Request | ICS 214 Activity Log |
| ICS 204 Assignment List (multiple) | ICS 215 Operational Planning Worksheet | Cover page |
| ICS 205 Radio Communications Plan | ICS 217A Communications Resource Availability | Image library |
| ICS 205A Communications List | ICS 309 Communications Log | |
| ICS 206 Medical Plan | Image attachment (map, photo, inject, chart) | |
| ICS 207 Organization Chart (generated from 203) | | |
| ICS 208 Safety Message/Plan | | |

Not included: ICS 211 (Check-In), 215A (Safety Analysis), 216-221 and others. The forms follow the content and field names of the FEMA ICS forms but are **not** pixel-for-pixel replicas. Check them against the current FEMA forms before relying on them.

### Channel templates (ICS 217A)

On any ICS 217A, template buttons add rows, and **Copy these channels into ICS 205** pushes them into the radio plan.

- **NIFOG** - VHF simplex (VCALL10, VTAC11-14), VHF repeater (VTAC33-38), UHF (UCALL40, UTAC41-43), 700 MHz (7CALL50, 7TAC51-56, 7GTAC57, 7MOB59, and 7CALL70, 7TAC71-76), 800 MHz (8CALL90, 8TAC91-94), including direct channels, and the 700 MHz nationwide deployable trunked system (channels A-F and the YY/ZZ talkgroups). Checked against CISA NIFOG v2.02 (December 2024) on 6 Oct 2026. Re-verify against the current NIFOG before use.
- **AWIN ABIT** - the Arkansas Basic Interoperability Template (DPS/ADEM, effective 2 July 2018), zones Z1-Z8 individually or all at once. The ABIT lists talkgroup names only: Z1-Z6 rows have no talkgroup IDs or frequencies (get those from AWIN), and Z7/Z8 use the NIFOG frequencies. The channel positions (Z3-1, Z3-2, ...) follow the order printed in the ABIT; confirm against your radio's codeplug.
- **Spare space for new talkgroups** - the ABIT leaves Z9 (AGENCY) empty, so there is a **Z9 AGENCY - spare** set (6 rows) and an **Exercise / training talkgroups - spare** set (10 rows, EX-1 to EX-10). These are blank placeholders: rename them and enter the talkgroup ID once AWIN has created and programmed the talkgroup. The full ABIT button includes both sets (123 rows). The table is open-ended, so you can add more rows.
- **AUXCOMM amateur** - national simplex calling frequencies plus blank placeholders for your repeater, AllStar node and HF net. These rows are **not** verified against any source; fill in your local plan.

### Image library and cover image

- **Cover image.** Add a photo or an AI-generated image to the front page of the IAP (choose a file, drag it in, or paste). Tick *AI-generated* to print a disclosure label.
- **Image library.** A device-level library of reusable images (scenario photos, maps, exercise injects, charts) that works with or without an open incident. Add several at once by choosing, dragging or pasting; pick Small, Standard or High detail (maps); give each image a title, tags and notes; filter by text. From the library an image can be used as the **cover** or added as an **attachment page** (title, caption, credit, optional AI-generated label) that prints as its own page in the IAP.
- Images are resized and compressed to keep the plan light. An image is removed from storage only when nothing (library, cover or attachment) uses it any more.

### Other features

- **Multiple operational periods** per incident, and multiple incidents.
- **Remember "Prepared by" per form** (sidebar toggle). New forms and periods are pre-filled with the last preparer for that form; existing forms offer a one-click "use last preparer". Approvals are never remembered.
- **E-signatures** (sidebar). Draw or type a signature, optionally protect it with a PIN, then click **Sign** next to a signature field. Each signature is time-stamped. If the form body is edited afterwards, the signature is flagged on screen, in print, and in the readiness checks.
- **Backup / restore:** Export backup and Import in the sidebar (includes the image library).

### Where your data lives

Everything is stored in **your browser's local storage on your device**. Nothing is sent anywhere; the app makes no network requests. That means:

- Incidents do not sync between devices or people. Use **Export backup** to move or share one.
- Clearing site data, using a private window, or switching browsers means an empty app. Export backups regularly, especially during an active incident.
- Browser storage is roughly 5 MB for everything. Images count against it; the Image library shows a usage bar and warns when it is nearly full.
- Saved signatures are stored unencrypted. A signature without a PIN can be applied by anyone using that browser. The PIN is a convenience lock, not a login. Check your agency's policy on electronic signatures; this is a signature image with a timestamp, not an identity-verified signature.
- Backups can include your signature library and images. Keep exported files private.

### Limitations

- No shared or multi-user editing.
- Print layout depends on the browser's print engine; review the PDF before distributing.
- Reference data (NIFOG, ABIT) is a snapshot. It is a planning aid, not an authoritative source.
- Exercise incidents are not specially marked on printed pages.

## License

MIT, see [LICENSE](LICENSE).
