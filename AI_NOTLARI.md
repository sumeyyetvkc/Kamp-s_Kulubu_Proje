# AI_NOTLARI

Bu dosya, Oyun Tasarım ve Geliştirme Kulübü sitesi üzerinde çalışırken kullanılan prompt'ları ve doğrulanmış test notlarını kaydeder.

## Prompt 1 — Profesyonel koyu tema
**Prompt:** "Mevcut koyu temayı koru; lacivert ve siyaha yakın arka plan, neon mor ve elektrik mavisi başlıklar, mor-mavi buton geçişleri ve ışık efektli yarı saydam kart kenarlıkları kullan. HTML yapısını ve JavaScript arama işlevini değiştirme; ortak tasarım kurallarını `style.css` içinde tut."

**Amaç:** Okunabilirliği koruyan, sayfalar arası tutarlı bir tema oluşturmak.

## Prompt 2 — Ana sayfa giriş animasyonları
**Prompt:** "Ana sayfa açıldığında başlık, açıklama ve butonlar aşağıdan yukarı belirsin; arka plandaki neon mor ve mavi halkalar yavaşça hareket etsin. Animasyonları dikkat dağıtmayacak kadar hafif tut, `prefers-reduced-motion` desteği ekle ve mevcut HTML içeriğini, bağlantıları ve Bootstrap menüsünü koru."

**Amaç:** Sakin açılış hareketleri eklerken erişilebilirliği korumak.

## Prompt 3 — Kart ve buton etkileşimleri
**Prompt:** "Etkinlik ve özellik kartları hover sırasında hafifçe yükselsin, neon mor kenarlık ve hafif aydınlık kazansın; butonlardaki mor-mavi geçiş yumuşak olsun. `transition` kullan, mobil davranışı ve okunabilirliği koru; HTML, bağlantılar ve arama JavaScript'ini değiştirme."

**Amaç:** Etkileşimli geri bildirimleri CSS ile ve dokunmatik ekranları gözeterek eklemek.

## Prompt 4 — Üç sayfada ortak tasarım sistemi
**Prompt:** "Ana sayfa, etkinlikler ve hakkında sayfalarında aynı koyu zemin, neon mor-mavi palet, başlık, buton ve kart stillerini kullan. Aktif navigasyon bağlantısını belirginleştir; giriş animasyonları içerik görünürlüğünü geciktirmesin. Ortak kuralları `style.css` içinde tut ve bağlantılarla etkinlik aramasını koru."

**Amaç:** Üç HTML sayfasında ortak tasarım kuralları uygulamak.

## Prompt 5 — Tasarım ve işlev incelemesi
**Prompt:** "Renk ve animasyon değişikliklerini mobil taşma, metin okunabilirliği, kontrast, klavye gezinmesi, `prefers-reduced-motion` ve etkinlik aramasının sonuç sayacı, eşleşme yok mesajı ve Temizle davranışı açısından incele. Sorunları dosya/kod bölümüyle açıkla ve test etmediğin bir özelliğin çalıştığını iddia etme."

**Amaç:** Görsel değişikliklerin erişilebilirlik ve mevcut işlevlere etkisini kontrol etmek.

## Prompt 6 — Chromium / Playwright testi
**Prompt:** "Chromium/Playwright ile test et."

**Amaç:** Taşma, klavye gezinmesi, hareket azaltma ve arama akışını gerçek tarayıcıda kontrol etmek.

## Prompt 7 — Etkinlik saatleri
**Prompt:** "Etkinlikler kısmına saat ekle."

**Amaç:** Etkinlik kartlarında tarih ve mekânın yanında başlangıç saati göstermek.

## Prompt 8 — Test sonuçlarını raporlama
**Prompt:** "Test sonuçlarını ver."

**Amaç:** Yapılan Chromium/Playwright kontrollerinin sonuçlarını ve test edilmeyen noktaları kısa biçimde raporlamak.

## Doğrulama notları
- Chromium ile ana sayfa, etkinlikler ve hakkında sayfaları 320, 390, 768 ve 1366 px genişliklerde test edildi; yatay taşma görülmedi.
- Mobil menü klavyeyle açıldı; Tab ile bağlantılar arasında ilerlenebildi ve odak çerçevesi görüldü.
- `prefers-reduced-motion` altında kök kaydırma `auto` oldu; başlık animasyonu ve buton geçişi `0.00001s` değerine düştü.
- Etkinlik aramasında `PİXEL` eşleşti, `PIXEL` eşleşmedi. Kaynak: `script.js` içindeki `toLocaleLowerCase("tr-TR")` dönüşümü.
- Etkinlik saatleri eklendikten sonra 320 ve 390 px genişliklerde taşma görülmedi; beş etkinlik ve saat bilgileri korundu.
- Chromium ilk çalıştırmada `libatk-1.0.so.0` eksikliği nedeniyle açılamadı; `npx playwright install-deps chromium` çalıştırıldıktan sonra tarayıcı testleri başarıyla tamamlandı.
