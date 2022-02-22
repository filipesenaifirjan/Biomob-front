import React, { useEffect, useState } from "react";

window.onload = function () {
  var elementBody = document.querySelector("body");
  var elementBtnIncreaseFont = document.getElementById("increase-font");
  var elementBtnDecreaseFont = document.getElementById("decrease-font");
  // Padrão de tamanho, equivale a 100% do valor definido no Body
  var fontSize = 100;
  // Valor de incremento ou decremento, equivale a 10% do valor do Body
  var increaseDecrease = 10;

  // Evento de click para aumentar a fonte
  elementBtnIncreaseFont.addEventListener("click", function (event) {
    fontSize = fontSize + increaseDecrease;
    elementBody.style.fontSize = fontSize + "%";
  });

  // Evento de click para diminuir a fonte
  elementBtnDecreaseFont.addEventListener("click", function (event) {
    fontSize = fontSize - increaseDecrease;
    elementBody.style.fontSize = fontSize + "%";
  });
};

function Acessibilidade() {
  return (
    <div className="acessibilidade">
      <div className="fontsize-up" id="increase-font">
        Aa +
      </div>
      <div className="fontsize-down" id="decrease-font">
        Aa -
      </div>
      <div className="fontsize-reset wah-call-clear-cookies">Reset</div>
      <div class="accessibility-helper">
        <img
          alt="Símbolos de Acessibilidade"
          data-src="https://biomob.app.br/wp-content/themes/Biomob/assets/icons/icon_contrast.svg"
          class=" ls-is-cached lazyloaded"
          src="https://biomob.app.br/wp-content/themes/Biomob/assets/icons/icon_contrast.svg"
        />
        <noscript>
          <img
            src="https://biomob.app.br/wp-content/themes/Biomob/assets/icons/icon_contrast.svg"
            alt="Símbolos de Acessibilidade"
          />
        </noscript>
      </div>
    </div>
  );
}


export default Acessibilidade;
