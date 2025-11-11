// scripts/boot.js
if (!process.env.DATABASE_URL) {
    console.error("[BOOT] Falta DATABASE_URL en runtime. Revisa Variables del SERVICIO en Railway.");
    process.exit(1);
}
console.log("[BOOT] DATABASE_URL detectada. Ejecutando prisma db push...");
import('child_process').then(({ execSync }) => {
    execSync('npx prisma db push', { stdio: 'inherit' });
    console.log("[BOOT] Prisma db push OK. Arrancando servidor...");
    import('../dist/server.js');
});
