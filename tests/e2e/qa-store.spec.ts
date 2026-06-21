import { test, expect } from '@playwright/test';

test.describe('QA Store - E2E Validation Suite', () => {

  test.beforeEach(async ({ page }) => {
    // Redirección a una tienda e-commerce de práctica controlada
    await page.goto('https://saucedemo.com/');
  });

  test('Should login and complete checkout simulation', async ({ page }) => {
    // 1. Inicio de sesión
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('.title')).toHaveText('Products');

    // 2. Agregar producto al carrito
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

    // 3. Simular compra completa
    await page.locator('.shopping_cart_link').click();
    await page.locator('[data-test="checkout"]').click();

    // 4. Llenar datos de envío
    await page.locator('[data-test="firstName"]').fill('Guillermo');
    await page.locator('[data-test="lastName"]').fill('Viniegra');
    await page.locator('[data-test="postalCode"]').fill('04230');
    await page.locator('[data-test="continue"]').click();

    // 5. Finalizar
    await page.locator('[data-test="finish"]').click();
    await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
    
    // Evidencia visual de éxito
    await page.screenshot({ path: 'test-results/checkout-success.png' });
  });
});