import Footer from "@/components/Footer";
import Header from "@/components/header";
import "@/styles/globals.css";

export const metadata = {
  title: "Open Healthcare Network: Transforming Healthcare with AI",
  description:
    "Open Healthcare Network leverages artificial intelligence to enhance healthcare services, improving access and quality of care for underserved communities in India.",
  keywords:
    "Open Healthcare Network, AI Healthcare, 10BedICU, Healthcare technology, AI in medicine, India healthcare innovation",
  openGraph: {
    title: "Open Healthcare Network: Transforming Healthcare with AI",
    description:
      "Discover how Open Healthcare Network uses AI to revolutionize healthcare, making advanced care accessible and efficient across India.",
    url: "https://ohc.network",
    type: "website",
    images: [
      {
        url: "https://ohc.network/meta_cover.png",
        width: 800,
        height: 600,
        alt: "Open Healthcare Network Cover Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Open Healthcare Network: Transforming Healthcare with AI",
    description:
      "Explore the impact of AI on healthcare with Open Healthcare Network, providing innovative solutions to enhance care delivery in India.",
    images: ["https://ohc.network/meta_cover.png"],
  },
  author: "Open Healthcare Network",
  verification: {
    google: "Google_Site_Verification_Code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
