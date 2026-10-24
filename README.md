# Oyun Tasarım ve Geliştirme Kulübü

Öğrencilerin oyun tasarımı ve geliştirme çalışmalarını tanıtan, üç sayfalı statik bir kulüp sitesi.

## Proje hakkında

Site; kulübün etkinliklerini, çalışma alanlarını ve amacını tanıtır. HTML, CSS, Bootstrap ve JavaScript ile hazırlanmıştır. Ortak görünüm ve sayfaya özel tasarım kuralları `style.css` içinde tutulur.

## Sayfalar ve özellikler

- **Ana sayfa (`index.html`):** Kulüp tanıtımı, çalışma alanları ve etkinliklere yönlendirmeler.
- **Etkinlikler (`etkinlikler.html`):** Örnek etkinlik kartları; başlığa göre arama, sonuç sayacı, eşleşme bulunamadı mesajı ve aramayı temizleme.
- **Hakkımızda (`hakkimizda.html`):** Kulübün amacı, vizyonu ve çalışma alanları.
- **`style.css`:** Üç sayfanın ortak renk paleti, tipografisi, kartları, butonları, responsive düzenleri ve animasyonları.
- **`script.js`:** Etkinlik başlıklarına göre filtreleme ve arama arayüzünün güncellenmesi.

## Çalıştırma

Projeyi çalıştırmak için bir derleme adımı gerekmez. `index.html` dosyasını tarayıcıda açabilir veya proje klasöründe basit bir yerel sunucu başlatabilirsiniz:

```bash
python3 -m http.server 8000
```

Ardından `http://localhost:8000` adresini açın. Bootstrap ve Google Fonts CDN kaynakları için internet bağlantısı gerekir.

## Test kayıtları

Tarayıcı, viewport, arama ve erişilebilirlik kontrollerinin girdileri ve sonuçları [`TEST_NOTLARI.md`](TEST_NOTLARI.md) dosyasında tutulur. Kullanılan AI prompt'ları ve çalışma notları [`AI_NOTLARI.md`](AI_NOTLARI.md) dosyasındadır.

## Repository

GitHub repository bağlantısı: https://github.com/sumeyyetvkc/Kamp-s_Kulubu_Proje