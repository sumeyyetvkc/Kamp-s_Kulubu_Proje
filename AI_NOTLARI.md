# AI_NOTLARI

Bu belgeyi kendi çalışmana göre güncelle. Aşağıdaki prompt'lar örnektir; gerçekten kullandığın prompt'ları ve aldığın önerileri doğru biçimde kaydet.

## Prompt 1 — Tasarım planı
**Prompt:** "Oyun Tasarım ve Geliştirme Kulübü için koyu tema, neon mor ve mavi renkler kullanan, üç HTML sayfasına sahip bir öğrenci kulübü sitesi planla. Önce dosya yapısını ve her sayfanın amacını açıkla."

**Amaç:** Kodlamaya başlamadan önce sayfa yapısını planlamak.

## Prompt 2 — Etkinlik araması
**Prompt:** "Etkinlik kartlarının başlıklarını filtreleyen JavaScript araması için kısa bir plan öner. Büyük-küçük harf, baştaki/sondaki boşluk, sonuç sayacı, eşleşme yok mesajı ve Temizle düğmesi gereksinimlerini dikkate al."

**Amaç:** Arama işlevinin kabul ölçütlerini planlamak.

## Prompt 3 — Kod inceleme ve test
**Prompt:** "Aşağıdaki JavaScript arama kodunu incele. Olası hataları, erişilebilirlik sorunlarını ve test edilmesi gereken durumları listele. Önce açıklama yap; kodu değiştirme."

**Amaç:** Kodu anlamak ve test senaryoları belirlemek.

## AI önerisi değerlendirmesi
- **Öneri:** [Gerçekte aldığın bir AI önerisini yaz.]
- **Kararım:** [Kabul ettim / değiştirdim / reddettim.]
- **Neden:** [Kendi cümlelerinle gerekçeni açıkla.]

## Kod açıklaması: event listener
`addEventListener`, bir olay gerçekleştiğinde çalışacak fonksiyonu tanımlamak için kullanılır. Bu projede `input` olayı arama alanının değeri değiştikçe filtreleme fonksiyonunu çalıştırır; `click` olayı ise Temizle düğmesine basılınca arama alanını sıfırlar.

## Kod açıklaması: filtreleme koşulu
`title.includes(query)` koşulu, etkinlik başlığında aranan metnin bulunup bulunmadığını kontrol eder. Arama metni ve başlık küçük harfe dönüştürüldüğü ve arama metninin kenarlarındaki boşluklar temizlendiği için büyük-küçük harf ve baştaki/sondaki boşluklar sonucu etkilemez.
