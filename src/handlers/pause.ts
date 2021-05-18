import { Composer } from 'telegraf';
import { pause } from '../tgcalls';

export const pauseHandler = Composer.command(['dur', 'devam'], async ctx => {
    const { chat } = ctx.message;

    if (chat.type !== 'supergroup') {
        return;
    }

    const paused = await pause(chat.id);
    const message = paused === null ? "🙄 Oyanatacak bir şey yok" : paused ? 'dur.' : 'devam.';

    await ctx.reply(message);
});
