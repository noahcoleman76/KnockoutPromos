import React, { useEffect, useMemo, useRef, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import logo from "../assets/fist.png";

export default function QrMakerPage() {
  const [url, setUrl] = useState("https://knockoutpromos.com");

  // Export size (high-quality output for download/copy)
  const [exportSize, setExportSize] = useState(720);

  const [bgColor, setBgColor] = useState("#ffffff");
  const [fgColor, setFgColor] = useState("#000000");

  // Preview wrapper (visible)
  const previewWrapRef = useRef(null);
  // Export wrapper (hidden, high quality)
  const exportWrapRef = useRef(null);

  const [copied, setCopied] = useState(false);
  const [copyMsg, setCopyMsg] = useState("");

  // Track viewport for responsive preview sizing
  const [viewportW, setViewportW] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  useEffect(() => {
    const onResize = () => setViewportW(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const cleanedUrl = useMemo(() => url.trim(), [url]);

  const isValid = useMemo(() => {
    if (!cleanedUrl) return false;
    try {
      const u = cleanedUrl.startsWith("http")
        ? new URL(cleanedUrl)
        : new URL(`https://${cleanedUrl}`);
      return Boolean(u.hostname);
    } catch {
      return false;
    }
  }, [cleanedUrl]);

  const valueToEncode = useMemo(() => {
    if (!cleanedUrl) return "";
    return cleanedUrl.startsWith("http") ? cleanedUrl : `https://${cleanedUrl}`;
  }, [cleanedUrl]);

  // Responsive preview size (fits mobile nicely)
  const previewSize = useMemo(() => {
    const maxMobile = Math.min(320, viewportW - 96);
    if (viewportW < 520) return Math.max(220, maxMobile);
    if (viewportW < 900) return 360;
    return 420;
  }, [viewportW]);

  function getExportCanvas() {
    return exportWrapRef.current?.querySelector("canvas") || null;
  }

  function showCopied(message) {
    setCopyMsg(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  async function copyToClipboard() {
    const canvas = getExportCanvas();
    if (!canvas) return;

    // Best case: copy image (Chrome/Edge desktop, some Android)
    if (window.ClipboardItem && navigator.clipboard?.write) {
      canvas.toBlob(async (blob) => {
        if (!blob) return;
        try {
          await navigator.clipboard.write([
            new ClipboardItem({ [blob.type]: blob }),
          ]);
          showCopied("✓ High-quality QR copied");
        } catch (e) {
          console.error(e);
          // Fallback: copy URL text (more reliable, esp. iOS)
          try {
            await navigator.clipboard.writeText(valueToEncode);
            showCopied("✓ Image copy blocked — URL copied instead");
          } catch {
            alert("Couldn’t copy. Try Download PNG.");
          }
        }
      }, "image/png");
      return;
    }

    // Fallback (iOS Safari): copy URL text
    try {
      await navigator.clipboard.writeText(valueToEncode);
      showCopied("✓ Image copy not supported — URL copied instead");
    } catch (e) {
      console.error(e);
      alert("Clipboard not available here. Use Download PNG.");
    }
  }

  function downloadPng() {
    const canvas = getExportCanvas();
    if (!canvas) return;

    const pngUrl = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = pngUrl;
    a.download = `qr-${exportSize}px.png`;
    a.click();
  }

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h1 style={styles.title}>QR Code Maker</h1>
          <p style={styles.subtitle}>
            Paste a link → preview a QR code → copy/download in high quality.
          </p>
        </div>

        <label style={styles.label}>URL</label>
        <input
          style={{
            ...styles.input,
            ...(cleanedUrl && !isValid ? styles.inputBad : null),
          }}
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://knockoutpromos.com/quickquack"
          spellCheck={false}
          inputMode="url"
          autoCapitalize="none"
          autoCorrect="off"
        />
        {cleanedUrl && !isValid && (
          <div style={styles.error}>
            That doesn’t look like a valid URL. Try including .com or https://
          </div>
        )}

        {/* Controls */}
        <div style={styles.row}>
          <div style={styles.fieldWide}>
            <label style={styles.labelSmall}>Export size (px)</label>
            <input
              style={styles.inputSmall}
              type="number"
              min={200}
              max={2000}
              value={exportSize}
              onChange={(e) => setExportSize(Number(e.target.value || 720))}
            />
          </div>

          <div style={styles.field}>
            <label style={styles.labelSmall}>Foreground</label>
            <input
              style={styles.color}
              type="color"
              value={fgColor}
              onChange={(e) => setFgColor(e.target.value)}
              title="QR color"
            />
          </div>

          <div style={styles.field}>
            <label style={styles.labelSmall}>Background</label>
            <input
              style={styles.color}
              type="color"
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
              title="Background color"
            />
          </div>
        </div>

        {/* Buttons */}
        <div style={styles.actions}>
          <button
            style={{ ...styles.button, ...(isValid ? null : styles.buttonDisabled) }}
            onClick={copyToClipboard}
            disabled={!isValid}
          >
            Copy QR (HQ)
          </button>
          <button
            style={{
              ...styles.buttonOutline,
              ...(isValid ? null : styles.buttonDisabled),
            }}
            onClick={downloadPng}
            disabled={!isValid}
          >
            Download PNG (HQ)
          </button>
        </div>

        {copied && <div style={styles.copied}>{copyMsg}</div>}

        <style>
          {`
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(-4px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}
        </style>

        {/* PREVIEW (responsive) */}
        <div style={styles.qrWrap} ref={previewWrapRef}>
          {isValid ? (
            <div style={styles.qrBox}>
              <div style={styles.qrPadding}>
                <QRCodeCanvas
                  value={valueToEncode}
                  size={previewSize}
                  bgColor={bgColor}
                  fgColor={fgColor}
                  level="H"
                  imageSettings={{
                    src: logo,
                    height: Math.round(previewSize * 0.22),
                    width: Math.round(previewSize * 0.22),
                    excavate: true,
                    margin: Math.max(8, Math.round(previewSize * 0.015)),
                  }}
                />
              </div>

              <div style={styles.previewNote}>
                Preview size: {previewSize}px • Exports at: {exportSize}px
              </div>

              <div style={styles.encoded}>{valueToEncode}</div>
            </div>
          ) : (
            <div style={styles.placeholder}>Enter a valid URL to generate the QR code.</div>
          )}
        </div>

        {/* HIDDEN EXPORT CANVAS (HQ) used for copy/download */}
        <div ref={exportWrapRef} style={styles.hiddenExport} aria-hidden="true">
          {isValid && (
            <QRCodeCanvas
              value={valueToEncode}
              size={exportSize}
              bgColor={bgColor}
              fgColor={fgColor}
              level="H"
              imageSettings={{
                src: logo,
                height: Math.round(exportSize * 0.22),
                width: Math.round(exportSize * 0.22),
                excavate: true,
                margin: Math.max(10, Math.round(exportSize * 0.015)),
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: 16,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    background: "linear-gradient(180deg, #0b0c10, #050712)",
    color: "#e5e7eb",
    fontFamily:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif',
  },
  card: {
    width: "min(960px, 100%)",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: 18,
    padding: 16,
    boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
  },
  header: { marginBottom: 12 },
  title: { margin: 0, fontSize: 28, letterSpacing: -0.2 },
  subtitle: { margin: "6px 0 0", color: "rgba(229,231,235,0.75)", lineHeight: 1.3 },

  label: { display: "block", marginTop: 10, marginBottom: 6, fontWeight: 600 },
  input: {
    width: "100%",
    padding: "12px 12px",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.16)",
    background: "rgba(0,0,0,0.35)",
    color: "#e5e7eb",
    outline: "none",
    fontSize: 15,
  },
  inputBad: { border: "1px solid rgba(236, 35, 38, 0.8)" },
  error: { marginTop: 8, color: "rgba(236, 35, 38, 0.95)", fontSize: 13 },

  row: { display: "flex", gap: 12, marginTop: 12, flexWrap: "wrap" },
  field: { display: "flex", gap: 8, alignItems: "center" },
  fieldWide: { display: "flex", gap: 8, alignItems: "center", flex: "1 1 240px" },
  labelSmall: { fontSize: 12, color: "rgba(229,231,235,0.75)", fontWeight: 600 },

  inputSmall: {
    width: 140,
    padding: "10px 10px",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.16)",
    background: "rgba(0,0,0,0.35)",
    color: "#e5e7eb",
    outline: "none",
    fontSize: 14,
  },

  color: {
    width: 44,
    height: 36,
    borderRadius: 10,
    border: "1px solid rgba(255,255,255,0.16)",
    background: "transparent",
    padding: 0,
  },

  actions: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: 12,
    marginTop: 14,
  },

  button: {
    padding: "12px 14px",
    borderRadius: 14,
    border: "1px solid rgba(236, 35, 38, 0.7)",
    background: "rgba(236, 35, 38, 0.92)",
    color: "white",
    fontWeight: 800,
    cursor: "pointer",
    width: "100%",
  },
  buttonOutline: {
    padding: "12px 14px",
    borderRadius: 14,
    border: "1px solid rgba(255,255,255,0.20)",
    background: "rgba(0,0,0,0.25)",
    color: "#e5e7eb",
    fontWeight: 800,
    cursor: "pointer",
    width: "100%",
  },
  buttonDisabled: { opacity: 0.45, cursor: "not-allowed" },

  copied: {
    marginTop: 8,
    color: "#22c55e",
    fontWeight: 700,
    fontSize: 14,
    textAlign: "center",
    animation: "fadeIn 0.2s ease-out",
  },

  qrWrap: { marginTop: 16, display: "flex", justifyContent: "center" },
  qrBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
    padding: 14,
    borderRadius: 18,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(0,0,0,0.25)",
    width: "100%",
  },
  qrPadding: {
    background: "#ffffff",
    padding: 16,
    borderRadius: 12,
    maxWidth: "100%",
    overflow: "hidden",
  },
  previewNote: {
    fontSize: 12,
    color: "rgba(229,231,235,0.65)",
    textAlign: "center",
  },
  encoded: {
    fontSize: 12,
    color: "rgba(229,231,235,0.7)",
    wordBreak: "break-all",
    textAlign: "center",
    maxWidth: "100%",
  },
  placeholder: {
    padding: 18,
    borderRadius: 14,
    border: "1px dashed rgba(255,255,255,0.18)",
    color: "rgba(229,231,235,0.7)",
    textAlign: "center",
    width: "100%",
  },

  hiddenExport: {
    position: "absolute",
    left: "-99999px",
    top: "-99999px",
    width: 0,
    height: 0,
    overflow: "hidden",
  },
};
