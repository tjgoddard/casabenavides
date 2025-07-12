import bannerImage from "@assets/f4f18f_a6469b265dcd46f3a644733b43dd2045~mv2 (2)_1752359016794.jpeg";

export default function HeaderBanner() {
  return (
    <div className="w-full">
      <img 
        src={bannerImage} 
        alt="Casa Benavides Header Banner" 
        className="w-full h-16 object-cover"
      />
    </div>
  );
}