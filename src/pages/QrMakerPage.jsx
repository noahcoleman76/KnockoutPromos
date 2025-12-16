import React, { useMemo, useRef, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

// Put your logo file somewhere like: src/assets/knockout-logo.png
// Or use /logoredwhite.png if it's in your public/ folder.
import logo from "../assets/fist.png";

export default function QrMakerPage() {
    const [url, setUrl] = useState("https://knockoutpromos.com");
    const [size, setSize] = useState(720); // nice for printing
    const [bgColor, setBgColor] = useState("#ffffff");
    const [fgColor, setFgColor] = useState("#000000");
    const canvasWrapRef = useRef(null);
    const [copied, setCopied] = useState(false);

    const cleanedUrl = useMemo(() => url.trim(), [url]);

    const isValid = useMemo(() => {
        if (!cleanedUrl) return false;
        try {
            // Allow folks to paste without protocol — we’ll still try to validate.
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
        // If user didn’t include protocol, assume https
        return cleanedUrl.startsWith("http") ? cleanedUrl : `https://${cleanedUrl}`;
    }, [cleanedUrl]);

    function getCanvas() {
        // QRCodeCanvas renders a <canvas> inside our wrapper
        return canvasWrapRef.current?.querySelector("canvas") || null;
    }

    async function copyToClipboard() {
        const canvas = getCanvas();
        if (!canvas) return;

        if (!window.ClipboardItem) {
            alert("Clipboard image copy not supported. Use Download PNG instead.");
            return;
        }

        canvas.toBlob(async (blob) => {
            if (!blob) return;
            try {
                await navigator.clipboard.write([
                    new ClipboardItem({ [blob.type]: blob })
                ]);

                setCopied(true);
                setTimeout(() => setCopied(false), 2000); // auto-hide
            } catch (e) {
                console.error(e);
                alert("Couldn’t copy image to clipboard.");
            }
        }, "image/png");
    }


    function downloadPng() {
        const canvas = getCanvas();
        if (!canvas) return;
        const pngUrl = canvas.toDataURL("image/png");
        const a = document.createElement("a");
        a.href = pngUrl;
        a.download = "qr-code.png";
        a.click();
    }

    return (
        <div style={styles.page}>
            <div style={styles.card}>
                <div style={styles.header}>
                    <h1 style={styles.title}>QR Code Maker</h1>
                    <p style={styles.subtitle}>Paste a link → copy or download a QR code (with your logo).</p>
                </div>

                <label style={styles.label}>URL</label>
                <input
                    style={{ ...styles.input, ...(cleanedUrl && !isValid ? styles.inputBad : null) }}
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="https://knockoutpromos.com/quickquack"
                    spellCheck={false}
                />
                {cleanedUrl && !isValid && (
                    <div style={styles.error}>That doesn’t look like a valid URL. Try including .com or https://</div>
                )}

                <div style={styles.row}>
                    <div style={styles.field}>
                        <label style={styles.labelSmall}>Size (px)</label>
                        <input
                            style={styles.inputSmall}
                            type="number"
                            min={200}
                            max={2000}
                            value={size}
                            onChange={(e) => setSize(Number(e.target.value || 720))}
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

                <div style={styles.actions}>
                    <button
                        style={{ ...styles.button, ...(isValid ? null : styles.buttonDisabled) }}
                        onClick={copyToClipboard}
                        disabled={!isValid}
                    >
                        Copy QR (PNG)
                    </button>
                    <button
                        style={{ ...styles.buttonOutline, ...(isValid ? null : styles.buttonDisabled) }}
                        onClick={downloadPng}
                        disabled={!isValid}
                    >
                        Download PNG
                    </button>
                </div>
                {copied && (
                    <div style={styles.copied}>
                        ✓ Copied to clipboard
                    </div>
                )}
                <style>
                    {`
                        @keyframes fadeIn {
                          from { opacity: 0; transform: translateY(-4px); }
                          to { opacity: 1; transform: translateY(0); }
                        }
                    `}
                </style>

                <div style={styles.qrWrap} ref={canvasWrapRef}>
                    {isValid ? (
                        <div style={styles.qrBox}>
                            <div style={styles.qrPadding}>
                                <QRCodeCanvas
                                    value={valueToEncode}
                                    size={size}
                                    bgColor={bgColor}
                                    fgColor={fgColor}
                                    level="H"
                                    imageSettings={{
                                        src: logo,
                                        height: Math.round(size * 0.22),
                                        width: Math.round(size * 0.22),
                                        excavate: true,
                                        margin: 10, // logo breathing room
                                    }}
                                />
                            </div>
                        </div>

                    ) : (
                        <div style={styles.placeholder}>Enter a valid URL to generate the QR code.</div>
                    )}
                </div>
            </div>
        </div>
    );
}

const styles = {
    page: {
        minHeight: "100vh",
        padding: 24,
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
        padding: 18,
        boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
    },
    header: { marginBottom: 16 },
    title: { margin: 0, fontSize: 28, letterSpacing: -0.2 },
    subtitle: { margin: "6px 0 0", color: "rgba(229,231,235,0.75)" },

    label: { display: "block", marginTop: 12, marginBottom: 6, fontWeight: 600 },
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

    row: { display: "flex", gap: 14, marginTop: 14, flexWrap: "wrap" },
    field: { display: "flex", gap: 8, alignItems: "center" },
    labelSmall: { fontSize: 12, color: "rgba(229,231,235,0.75)", fontWeight: 600 },
    inputSmall: {
        width: 120,
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

    actions: { display: "flex", gap: 12, marginTop: 16, flexWrap: "wrap" },
    button: {
        padding: "12px 14px",
        borderRadius: 14,
        border: "1px solid rgba(236, 35, 38, 0.7)",
        background: "rgba(236, 35, 38, 0.92)",
        color: "white",
        fontWeight: 800,
        cursor: "pointer",
    },
    buttonOutline: {
        padding: "12px 14px",
        borderRadius: 14,
        border: "1px solid rgba(255,255,255,0.20)",
        background: "rgba(0,0,0,0.25)",
        color: "#e5e7eb",
        fontWeight: 800,
        cursor: "pointer",
    },
    buttonDisabled: { opacity: 0.45, cursor: "not-allowed" },

    qrWrap: { marginTop: 18, display: "flex", justifyContent: "center" },
    qrBox: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 10,
        padding: 14,
        borderRadius: 18,
        border: "1px solid rgba(255,255,255,0.10)",
        background: "rgba(0,0,0,0.25)",
    },
    encoded: { fontSize: 12, color: "rgba(229,231,235,0.7)", wordBreak: "break-all", maxWidth: 720 },
    placeholder: {
        padding: 18,
        borderRadius: 14,
        border: "1px dashed rgba(255,255,255,0.18)",
        color: "rgba(229,231,235,0.7)",
    },
    qrPadding: {
        background: "#ffffff",      // ensures quiet zone contrast
        padding: 16,                // replaces includeMargin
        borderRadius: 12,
    },
    copied: {
        marginTop: 5,
        color: "#22c55e",
        fontWeight: 700,
        fontSize: 14,
        textAlign: "center",
        animation: "fadeIn 0.2s ease-out",
    },
};
