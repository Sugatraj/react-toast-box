// src/services/ToastService.js
class ToastService {
  static listeners = [];

  static subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  static show(type, title, message, options = {}) {
    this.listeners.forEach((listener) =>
      listener(type, title, message, options)
    );
  }

  static success(title, message, options) {
    this.show("success", title, message, options);
  }

  static error(title, message, options) {
    this.show("danger", title, message, options);
  }

  static info(title, message, options) {
    this.show("info", title, message, options);
  }

  static warning(title, message, options) {
    this.show("warning", title, message, options);
  }
}

export default ToastService;
