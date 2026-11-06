# CardioAI — ECG Arrhythmia Intelligence (Frontend)

Modern, calm clinical frontend interface for the CardioAI ECG Arrhythmia Detection & Recovery Prediction platform. Built following the Tailscale design system and optimized for instant deployment on [Vercel](https://vercel.com).

## 🫀 Features
- **Tailscale Design Canvas:** Bone cream paper background (`#eeebea`), stark paper cards (`#ffffff`), Signal Red (`#d04841`), and Network Blue ECG waveform traces (`#5a82de`).
- **Interactive Plotly Lead II Waveform:** Pan, zoom, and inspect individual QRS complexes with AAMI beat-class markers.
- **11 Clinical Rhythm Diagnostics:** Visual indicators, risk tier stratification, and actionable clinical advice.
- **Automated Recovery Forecasting:** Estimated recovery window in days with trajectory benchmarks.
- **Longitudinal Patient Profiles:** Track patient history, previous ECG strips, and improvement metrics.
- **Dynamic Render API Connector:** Built-in connection status badge in the sidebar with 1-click backend URL configuration.

---

## 🚀 Deploy to Vercel (1-Click)

1. Log into your [Vercel Dashboard](https://vercel.com/dashboard).
2. Click **Add New...** -> **Project**.
3. Import the GitHub repository:
   `https://github.com/VinayakKamankar1/ECG-Based-Arrhythmia-Detection-Frontend.git`
4. Configuration:
   - **Framework Preset:** `Other` (Static HTML/CSS/JS)
   - **Root Directory:** `./`
   - **Build Command:** *(Leave empty)*
   - **Output Directory:** *(Leave empty)*
5. Click **Deploy**.
6. When the deployment finishes, open your Vercel URL.
7. Click the **API Connection badge** in the bottom-left sidebar to verify or set your Render backend URL if needed.

---

## 💻 Local Development

You can run this frontend locally using any static file server:

```bash
# Clone the repository
git clone https://github.com/VinayakKamankar1/ECG-Based-Arrhythmia-Detection-Frontend.git
cd ECG-Based-Arrhythmia-Detection-Frontend

# Run with Python
python -m http.server 8000

# Or run with Node/npx
npx serve .
```

Then open `http://localhost:8000` in your browser. When running locally, it will automatically connect to `http://127.0.0.1:5000` if your local backend is running!

---

## 🔗 Backend Repository
The REST backend for this project is hosted at:
[ECG-Based-Arrhythmia-Detection-Backend](https://github.com/VinayakKamankar1/ECG-Based-Arrhythmia-Detection-Backend.git)

