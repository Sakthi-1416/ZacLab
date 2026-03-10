import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../App";

export default function Footer() {
  const year = new Date().getFullYear();
  const { theme } = useTheme();

  return (
    <footer className="zac-footer">
      <div className="container">
        <div className="row g-4 mb-4">
          {/* Brand */}
          <div className="col-12 col-sm-6 col-md-4">
            <Link
              to="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.65rem",
                textDecoration: "none",
                marginBottom: "1.2rem",
              }}
            >
              <img
                src="/zaclab-logo.webp"
                alt="Zac Lab"
                style={{
                  height: "50px",
                  width: "50px",
                  objectFit: "contain",
                  borderRadius: "10px",
                  filter:
                    theme === "light"
                      ? "drop-shadow(0 1px 4px rgba(0,0,0,0.18))"
                      : "drop-shadow(0 0 8px rgba(192,57,43,0.4))",
                  transition: "filter 0.3s, transform 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.08)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
              <span className="zac-logo-text" style={{ fontSize: "1.4rem" }}>
                Zac Lab
              </span>
            </Link>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "0.84rem",
                lineHeight: "1.85",
                maxWidth: "270px",
              }}
            >
              Just some persons with skill and wifi.
              <br />
              We build things that actually work.
            </p>
          </div>

          {/* Navigate */}
          <div className="col-6 col-sm-3 col-md-2">
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.55rem",
                letterSpacing: "3px",
                color: "var(--crimson-glow)",
                marginBottom: "1rem",
                textTransform: "uppercase",
              }}
            >
              Navigate
            </p>
            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Services", "/services"],
              ["Portfolio", "/portfolio"],
              ["Blog", "/blog"],
              ["Contact", "/contact"],
            ].map(([label, to]) => (
              <Link
                key={to}
                to={to}
                style={{
                  display: "block",
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  fontSize: "0.82rem",
                  marginBottom: "0.55rem",
                  transition: "color 0.25s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--text-primary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-muted)")
                }
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div className="col-6 col-sm-3 col-md-2">
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.55rem",
                letterSpacing: "3px",
                color: "var(--crimson-glow)",
                marginBottom: "1rem",
                textTransform: "uppercase",
              }}
            >
              Services
            </p>
            {["Web Deploy", "UI/UX", "SEO", "Analytics", "SMM"].map((s) => (
              <p
                key={s}
                style={{
                  color: "var(--text-muted)",
                  fontSize: "0.82rem",
                  marginBottom: "0.55rem",
                }}
              >
                {s}
              </p>
            ))}
          </div>

          {/* Contact */}
          <div className="col-12 col-md-4">
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.55rem",
                letterSpacing: "3px",
                color: "var(--crimson-glow)",
                marginBottom: "1rem",
                textTransform: "uppercase",
              }}
            >
              Get in Touch
            </p>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "0.85rem",
                marginBottom: "1.5rem",
              }}
            >
              zaclabofficial.in@gmail.com
            </p>
            <div className="d-flex flex-wrap gap-3">
              {["Instagram",].map((s) => (
                <a
                  key={s}
                  href="https://www.instagram.com/zac_lab__?igsh=eGtjcHdnMTh6eGQ2"
                  target="_blank"
                  style={{
                    color: "var(--text-muted)",
                    fontFamily: "var(--font-display)",
                    fontSize: "0.6rem",
                    letterSpacing: "2px",
                    textDecoration: "none",
                    transition: "color 0.25s",
                    
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--crimson-glow)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-muted)")
                  }
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid var(--border-subtle)",
            paddingTop: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "0.8rem",
            alignItems: "center",
          }}
        >
          <div
            style={{ display: "flex", alignItems: "center", gap: "0.55rem" }}
          >
            <img
              src="/zaclab-logo.webp"
              alt=""
              aria-hidden="true"
              style={{
                height: "22px",
                width: "22px",
                objectFit: "contain",
                borderRadius: "4px",
                opacity: 0.55,
              }}
            />
            <p
              style={{
                color: "var(--text-faint)",
                fontSize: "0.62rem",
                fontFamily: "var(--font-display)",
                letterSpacing: "2.5px",
                margin: 0,
              }}
            >
              © {year} ZAC LAB — SKILL &amp; WIFI
            </p>
          </div>
          <p
            style={{
              color: "var(--text-faint)",
              fontSize: "0.62rem",
              fontFamily: "var(--font-display)",
              letterSpacing: "2.5px",
              margin: 0,
            }}
          >
            ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
}
