import React from "react";
import styles from "./ConditionsModal.module.css";

type ConditionsModalProps = {
    handleClose: () => void;
  };
  
  export default function ConditionsModal({ handleClose }: ConditionsModalProps) {
  return (
    <div className={styles.container}>
      <h1>Términos y condiciones</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non
        nunc lacus. Pellentesque aliquet elit eget consectetur elementum.
        Vivamus rutrum vestibulum orci sed convallis. Curabitur tincidunt neque
        in arcu malesuada tincidunt. Etiam lobortis vel dolor at scelerisque.
        Suspendisse molestie sem id porta congue. In et eros sit amet dolor
        ultricies sodales vitae id est. In et suscipit nulla, eget maximus
        dolor. Pellentesque commodo libero id nunc molestie sagittis. Aenean
        cursus suscipit tellus a blandit. Etiam eu lectus eros. Aliquam ac
        vehicula libero. Praesent non tortor ultricies, ornare erat eget,
        eleifend dui. Maecenas gravida, quam sit amet elementum convallis, ante
        augue rutrum nunc, sed volutpat massa lorem sit amet tellus. Nulla
        dictum feugiat faucibus. Praesent eget justo dignissim, pellentesque
        augue vel, maximus orci. Praesent dui arcu, vestibulum.
      </p>
      <button onClick={handleClose}>Volver</button>
    </div>
  );
}
