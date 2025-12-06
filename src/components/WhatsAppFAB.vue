<script setup>
import { ref } from 'vue';

const isModalOpen = ref(false);
const message = ref('');
const phoneNumber = '905303053700'; // WhatsApp API için format: 90 country code + numara

const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value;
  if (!isModalOpen.value) {
    message.value = ''; // Modal kapanınca mesajı temizle
  }
};

const sendMessage = () => {
  if (message.value.trim()) {
    const encodedMessage = encodeURIComponent(message.value);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    toggleModal();
  }
};
</script>

<template>
  <!-- Floating Action Button -->
  <div class="whatsapp-fab">
    <button @click="toggleModal" class="fab-button" aria-label="WhatsApp ile iletişime geç">
      <i class="fa-brands fa-whatsapp"></i>
    </button>
  </div>

  <!-- Modal -->
  <Transition name="modal">
    <div v-if="isModalOpen" class="modal-backdrop" @click="toggleModal">
      <div class="modal-content" @click.stop>
        <button @click="toggleModal" class="close-button" aria-label="Kapat">
          <i class="fa-solid fa-xmark"></i>
        </button>

        <div class="modal-header">
          <i class="fa-brands fa-whatsapp modal-icon"></i>
          <h3>WhatsApp ile İletişime Geç</h3>
          <p>Mesajınızı yazın, size yardımcı olalım!</p>
        </div>

        <div class="modal-body">
          <textarea
            v-model="message"
            placeholder="Mesajınızı buraya yazın..."
            rows="5"
            class="message-input"
            @keydown.esc="toggleModal"
          ></textarea>
        </div>

        <div class="modal-footer">
          <button @click="toggleModal" class="cancel-button">İptal</button>
          <button @click="sendMessage" class="send-button" :disabled="!message.trim()">
            <i class="fa-brands fa-whatsapp"></i>
            WhatsApp'ta Gönder
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
/* Floating Action Button */
.whatsapp-fab {
  position: fixed;
  bottom: 30px;
  left: 30px;
  z-index: 9999;
}

.fab-button {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #25D366, #128C7E);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: pulse 2s infinite;
}

.fab-button:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 30px rgba(37, 211, 102, 0.6);
}

.fab-button i {
  font-size: 32px;
  color: white;
}

@keyframes pulse {
  0%, 100% {
    box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
  }
  50% {
    box-shadow: 0 4px 25px rgba(37, 211, 102, 0.6);
  }
}

/* Modal Backdrop */
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  padding: 20px;
}

/* Modal Content */
.modal-content {
  background: white;
  border-radius: 20px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  position: relative;
  animation: slideUp 0.3s ease-out;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Close Button */
.close-button {
  position: absolute;
  top: 15px;
  right: 15px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: #f5f5f5;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 1;
}

.close-button:hover {
  background: #e0e0e0;
  transform: rotate(90deg);
}

.close-button i {
  font-size: 18px;
  color: #666;
}

/* Modal Header */
.modal-header {
  text-align: center;
  padding: 40px 30px 20px;
}

.modal-icon {
  font-size: 60px;
  color: #25D366;
  margin-bottom: 15px;
}

.modal-header h3 {
  font-size: 24px;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 10px 0;
}

.modal-header p {
  font-size: 14px;
  color: #6b7280;
  margin: 0;
}

/* Modal Body */
.modal-body {
  padding: 0 30px 20px;
}

.message-input {
  width: 100%;
  padding: 15px;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-family: inherit;
  font-size: 15px;
  resize: vertical;
  transition: all 0.3s ease;
  outline: none;
}

.message-input:focus {
  border-color: #25D366;
  box-shadow: 0 0 0 3px rgba(37, 211, 102, 0.1);
}

.message-input::placeholder {
  color: #9ca3af;
}

/* Modal Footer */
.modal-footer {
  display: flex;
  gap: 12px;
  padding: 0 30px 30px;
}

.cancel-button,
.send-button {
  flex: 1;
  padding: 14px 24px;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.cancel-button {
  background: #f3f4f6;
  color: #4b5563;
}

.cancel-button:hover {
  background: #e5e7eb;
}

.send-button {
  background: linear-gradient(135deg, #25D366, #128C7E);
  color: white;
  text-wrap: nowrap;
}

.send-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
}

.send-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.send-button i {
  font-size: 18px;
}

/* Modal Transitions */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-content,
.modal-leave-active .modal-content {
  transition: transform 0.3s ease;
}

.modal-enter-from .modal-content,
.modal-leave-to .modal-content {
  transform: translateY(30px);
}

/* Responsive */
@media (max-width: 768px) {
  .whatsapp-fab {
    bottom: 20px;
    left: 20px;
  }

  .fab-button {
    width: 55px;
    height: 55px;
  }

  .fab-button i {
    font-size: 28px;
  }

  .modal-content {
    max-width: 100%;
    border-radius: 20px 20px 0 0;
    margin-top: auto;
  }

  .modal-header {
    padding: 30px 20px 15px;
  }

  .modal-icon {
    font-size: 50px;
  }

  .modal-header h3 {
    font-size: 20px;
  }

  .modal-body {
    padding: 0 20px 15px;
  }

  .modal-footer {
    padding: 0 20px 20px;
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .whatsapp-fab {
    bottom: 15px;
    left: 15px;
  }

  .fab-button {
    width: 50px;
    height: 50px;
  }

  .fab-button i {
    font-size: 26px;
  }
}
</style>
