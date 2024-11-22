/** Subscriber PATTERN
 *  - Padrão para notificar objetos sobre quaisquer eventos que aconteçam com o objeto que eles estão observando
 *
 * Objeto Publisher: Objeto que é observado, e notifica os objetos que o observam
 * Objeto Subscriber: Objetos que recebem as mudanças do objeto Publisher
 *
 * Tudo o que precisa-se é:
 * 1) Uma lista para armazenar as referências de objetos que estão observando o objeto Publisher
 * 2) Métodos públicos para adicionar e remover objetos da lista
 */

import { Subscriber } from "./Subscriber";
import { Publisher } from "./Publisher";

const publicador = new Publisher(); // Instancia um publicador

const assinanteA = new Subscriber(); // Instancia um assinante
const assinanteB = new Subscriber(); // Instancia um assinante

publicador.attach(assinanteA); // Adiciona o assinante A ao publicador
publicador.attach(assinanteB); // Adiciona o assinante B ao publicador

// Atualiza o estado do publicador para 1 e notifica os assinantes
publicador.updateState(1);
