export default function LanguageSwitcher() {
  return (
    <div className="w-full p-4 mt-6 border border-dashed border-gray-300 rounded-xl text-center text-gray-500 text-sm">
      {/* Google AdSense Code 可放在这里 */}
      {lang === 'en' ? 'Ad Placeholder (insert AdSense)' : '广告位（稍后插入 AdSense）'}
    </div>
  );
}
