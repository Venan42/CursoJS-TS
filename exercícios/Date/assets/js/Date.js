function getWeekDate(date) {
    const day = date.getDay();
    switch (day) {
        case 0:
            return 'Domingo';
        case 1:
            return 'Segunda';
        case 2:
            return 'Terça';
        case 3:
            return 'Quarta';
        case 4:
            return 'Quinta';
        case 5:
            return 'Sexta';
        case 6:
            return 'Sábado';
        default:
            return '';
    }
}

function getFormattedDate(date) {
    const dia = date.getDate();
    const mes = getMonthString(date);
    const ano = date.getFullYear();
    const horas = date.getHours();
    const minutos = date.getMinutes();
    
    const minutosFormatados = minutos < 10 ? '0' + minutos : minutos;

    return `${dia} de ${mes} de ${ano}, ${horas}:${minutosFormatados}`;
}


function getMonthString(date) {
    const meses = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
    ];
    return meses[date.getMonth()];
}

const titulo = document.getElementById('paragrafo');
const dataAtual = new Date();

titulo.innerHTML = `${getWeekDate(dataAtual)}, ${getFormattedDate(dataAtual)}`;