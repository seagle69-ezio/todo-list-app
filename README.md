# 📝 Todo List App

Basit ve işlevsel bir **Yapılacaklar Listesi (Todo List)** uygulamasıdır.  
Kullanıcılar görev ekleyebilir, tamamlandı olarak işaretleyebilir, güncelleyebilir ve silebilir.

---

## 🚀 Özellikler
- ✅ Yeni görev ekleme  
- 🗑️ Görev silme  
- ✔️ Görevi tamamlandı olarak işaretleme   
- ⚡ React ile anlık (dinamik) güncellemeler  

---

## 🧰 Kullanılan Teknolojiler
- **React** → Bileşen tabanlı arayüz yapısı  
- **Vite** → Hızlı geliştirme ve test ortamı  
- **JavaScript (ES6)** → Uygulama mantığı  
- **CSS** → Görsel tasarım  
- **Local Storage API** → Tarayıcıda veri kaydetme

---

## ⚙️ Kurulum ve Çalıştırma

**1. Repoyu indirin:
   git clone https://github.com/seagle69-ezio/todo-list-app.git
**2.Klasöre gir**:
  cd todo-list-ap
**3.Gerekli bağımlılıkları yükle:
  npm install
**4.Uygulamayı başlat**:
  npm run dev
**5.Tarayıcıda aç**:

---

🔍 Açıklamalar Özeti
Kod	Ne Yapar
-useState([])	= Görevleri bellekte tutar (state)
-addTask() =	Yeni görev ekler
-deleteTask()	= İlgili görevi siler
-toggleComplete()	Görevi = tamamlandı olarak işaretler veya geri alır
-<input onKeyDown={...} /> =	Enter’a basıldığında görev ekler
-tasks.map(...) =	Tüm görevleri ekrana liste olarak basar
