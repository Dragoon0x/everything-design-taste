---
name: file-upload-patterns
description: File upload interfaces, progress indication, file type validation, and multi-file upload.
triggers: ["file upload", "upload", "file input", "drag drop upload"]
---

# File Upload Patterns

## Upload Patterns

### Single File
- Button: "Choose File" or styled dropzone.
- Show filename + size after selection.
- Progress bar during upload.
- Success: checkmark + filename. Error: red text + retry.

### Multi-File
- Drag and drop zone with file list below.
- Individual progress bars per file.
- Allow removing files before/during upload.
- Show total progress: "3 of 7 files uploaded."

### Image Upload
- Preview thumbnail after selection.
- Crop/resize tool for profile photos.
- Max size warning before upload starts.
- Format validation: show accepted formats.

## Validation
- Check file type on selection (before upload).
- Check file size on selection (before upload).
- Show accepted formats near the upload control.
- Server-side validation as backup (never trust client only).