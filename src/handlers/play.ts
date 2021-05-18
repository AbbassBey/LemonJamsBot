import { Composer, deunionize } from 'telegraf';
import { addToQueue } from '../tgcalls';

export const playHandler = Composer.command('play', async ctx => {
    const { chat } = ctx.message;

    if (chat.type !== 'supergroup') {
        await ctx.reply('Sadece grupta çalışıyorum');
        return;
    }

    const [commandEntity] = ctx.message.entities!;
    const text = ctx.message.text.slice(commandEntity.length + 1) || deunionize(ctx.message.reply_to_message)?.text;

    if (!text) {
        await ctx.reply('Bir 📽 YouTube URL si belirtmeniz gerekiyor.');
        return;
    }

    const index = await addToQueue(chat, text);

    let message;

    switch (index) {
        case -1:
            message = '😥indiremedim';
            break;

        case 0:
            message = 'Basla.';
            break;

        default:
            message = `Queued at position ${index}.`;
    }

    await ctx.reply(message);
});
