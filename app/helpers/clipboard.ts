export function clipboard(text: string) {
    if (!navigator.clipboard) {
        return { status: false, message: 'Clipboard API nao suportada.' };
    }

    try {
        if (!navigator.clipboard.writeText) {
            return { status: false, message: 'Clipboard API nao suportada.' };
        }
        navigator.clipboard.writeText(text);
        return { status: true, message: 'Copiado para a area de transferencia!' };
    } catch {
        return { status: false, message: 'Clipboard API nao suportada.' };
    }
}
