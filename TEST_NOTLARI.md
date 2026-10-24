# TEST_NOTLARI

## Test ortamı
- Playwright 1.64.1 ve Chromium headless kullanıldı.
- Sayfalar yerel `file://` URL'leri üzerinden açıldı; test için projeye bağımlılık eklenmedi.

## Test sonuçları

### Test 1 — Sayfalarda yatay taşma
**Girdi/işlem:** Ana sayfa, etkinlikler ve hakkında sayfalarını Chromium'da 320, 390, 768 ve 1366 px genişliklerde aç; `scrollWidth` ölç.

**Beklenen sonuç:** Belge ve gövde genişliği viewport'u aşmamalı.

**Gerçekleşen sonuç:** 12 ölçümün tamamında belge ve gövde genişliği viewport'a eşitti; taşma görülmedi.

**Durum:** Geçti.

### Test 2 — Etkinlik saatlerinin mobil görünümü
**Girdi/işlem:** Etkinlikler sayfasını 320 ve 390 px genişliklerde aç; kart ve `<time>` öğelerini kontrol et.

**Beklenen sonuç:** Beş etkinlik ve beş tarih-saat bilgisi görünmeli; yatay taşma olmamalı.

**Gerçekleşen sonuç:** İki genişlikte de beş kart ve beş saat bulundu; taşma olmadı.

**Durum:** Geçti.

### Test 3 — Başlangıç sayaç değeri
**Girdi/işlem:** Etkinlikler sayfasını JavaScript etkin halde aç.

**Beklenen sonuç:** Sayaç beş etkinlik göstermeli.

**Gerçekleşen sonuç:** “5 etkinlik gösteriliyor.”

**Durum:** Geçti.

### Test 4 — Türkçe büyük harfli arama
**Girdi/işlem:** Aramaya `PİXEL` yaz.

**Beklenen sonuç:** “Pixel Art Atölyesi” eşleşmeli; sayaç 1 olmalı.

**Gerçekleşen sonuç:** Bir etkinlik gösterildi.

**Durum:** Geçti.

### Test 5 — ASCII büyük harfli arama
**Girdi/işlem:** Aramaya `PIXEL` yaz.

**Beklenen sonuç:** Büyük-küçük harf duyarsız aramada “Pixel Art Atölyesi” eşleşmeli.

**Gerçekleşen sonuç:** Sıfır etkinlik gösterildi; `toLocaleLowerCase("tr-TR")`, `I` harfini noktasız `ı` yapıyor.

**Durum:** Kaldı.

### Test 6 — Eşleşme yok mesajı
**Girdi/işlem:** Aramaya `eşleşme yok` yaz.

**Beklenen sonuç:** Kart kalmamalı ve sonuç yok mesajı görünmeli.

**Gerçekleşen sonuç:** Kart kalmadı ve mesaj göründü.

**Durum:** Geçti.

### Test 7 — Temizle düğmesi
**Girdi/işlem:** Eşleşmeyen aramadan sonra “Temizle”ye tıkla.

**Beklenen sonuç:** Arama sıfırlanmalı, beş kart dönmeli, mesaj kapanmalı ve odak aramaya dönmeli.

**Gerçekleşen sonuç:** Tüm koşullar sağlandı; sayaç beş oldu ve odak arama alanına döndü.

**Durum:** Geçti.

### Test 8 — Mobil menü klavye gezinmesi
**Girdi/işlem:** 390 px'te Tab ile menü düğmesine git, Enter'a bas ve Tab ile ilerle.

**Beklenen sonuç:** Menü açılmalı; odak bağlantılara ilerlemeli ve görünür olmalı.

**Gerçekleşen sonuç:** Menü açıldı; odak “Ana Sayfa” ve “Etkinlikler” bağlantılarına geçti; 3 px outline göründü.

**Durum:** Geçti.

### Test 9 — Hareket azaltma tercihi
**Girdi/işlem:** Chromium'da `prefers-reduced-motion: reduce` emüle et; kaydırma ve süreleri oku.

**Beklenen sonuç:** Kök kaydırma `auto`, animasyon/geçiş süreleri ihmal edilebilir olmalı.

**Gerçekleşen sonuç:** Kök kaydırma `auto`; başlık animasyonu ve buton geçişi `0.00001s`.

**Durum:** Geçti.

### Test 10 — CTA gradyanı kontrastı
**Girdi/işlem:** Mor-mavi gradyandaki 101 ara rengi beyaz yazıya karşı hesapla.

**Beklenen sonuç:** Örneklenen her renkte kontrast en az 4.5:1 olmalı.

**Gerçekleşen sonuç:** En düşük örneklenen oran 5.37:1; bu tam WCAG denetimi değildir.

**Durum:** Geçti.

### Test 11 — JavaScript sayfa hataları
**Girdi/işlem:** Üç sayfayı Chromium'da açıp `pageerror` olaylarını izle.

**Beklenen sonuç:** Sayfa hatası oluşmamalı.

**Gerçekleşen sonuç:** Üç sayfada da `pageerror` oluşmadı.

**Durum:** Geçti.

## Kapsam dışı
- Ekran okuyucu testi yapılmadı.
- Tüm metin/zemin renk birleşimlerini kapsayan kapsamlı WCAG kontrast denetimi yapılmadı.
