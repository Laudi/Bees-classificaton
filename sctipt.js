//Царство: Животные Animalia -> Тип: Членистоногие Arthropoda - Класс:Насекомые Insecta -> Отряд: Перепончатокрылые Hymenoptera -> 
// -> Подотряд Стебельчатобрюхие Apocrita -> Надсемейство: Пчелиные Anthophila 
class Animalia {
    constructor (consument = true, mobility = true) {
        this.consument = consument; // питание готовыми органическими соединениями
        this.mobility = mobility; // способность активно передвигаться. Впрочем, существует немало животных, ведущих неподвижный образ жизни
    }
}
class Arthropoda extends Animalia {
    constructor(consument, mobility, skeleton = 'exo', body = 'segmented', limb = 'articulated', pairLimb = true) {
    super(consument, mobility);
    this.skeleton = skeleton; // наружный скелет
    this.body = body; // гетерономно сегментированное тело с парными членистыми конечностями
    this.limb = limb; // членистыми конечностями
    this.pairLimb = pairLimb; // с парными конечностями
  }
}
class Insecta extends Arthropoda {
    constructor(consument, mobility, skeleton, body, limb, pairLimb, head, chest, abdomen, wings = 0, feets = 6) {
    super(consument, mobility, skeleton, body, limb, pairLimb);
    this.head = head; // состоит из трёх отделов: головы, груди и брюшка
    this.chest = chest; 
    this.abdomen = abdomen; 
    this.wings = wings; // крылья
    this.feets = feets; // 6 ног
    }
}
class Hymenoptera extends Insecta {
    constructor(consument, mobility, skeleton, body, limb, pairLimb, head, chest, abdomen, wings, feets, pairWings = 2, sizePairWings = 'different', wingsNetting = true, crunch = 'crunch', metamorph = true) {
    super(consument, mobility, skeleton, body, limb, pairLimb, head, chest, abdomen, wings, feets);
    this.pairWings = pairWings; // из двух пар перепончатых крыльев задние меньше передних
    this.sizePairWings = sizePairWings; 
    this.wingsNetting = wingsNetting; //крылья с редкой сетью жилок, редко без жилок (есть и бескрылые формы)
    this.wings = wings; // на переднем крае заднего крыла расположен ряд крючковидных зацепок, входящих в соответствующую им складку на заднем крае переднего крыла,
    this.crunch = crunch; // грызущие и лижущие или только грызущие ротовые органы
    this.metamorph = metamorph; //Полное превращение, или голометаморфоз
    }
}
class Apocrita extends Hymenoptera {
    constructor(consument, mobility, skeleton, body, limb, pairLimb, head, chest, abdomen, wings, feets, pairWings, sizePairWings, wingsNetting, crunch, metamorph, waist = true) {
    super(consument, mobility, skeleton, body, limb, pairLimb, head, chest, abdomen, wings, feets, pairWings, sizePairWings, wingsNetting, crunch, metamorph);
    this.waist = waist; // по признаку наличия узкой талии — тонкого стебелька между грудкой и брюшком
    }
}
class Anthophila extends Apocrita {
    constructor(consument, mobility, skeleton, body, limb, pairLimb, head, chest, abdomen, wings, feets, pairWings, sizePairWings, wingsNetting, crunch, metamorph, waist, proboscis, antennae) {
    super(consument, mobility, skeleton, body, limb, pairLimb, head, chest, abdomen, wings, feets, pairWings, sizePairWings, wingsNetting, crunch, metamorph, waist);
    this.proboscis = proboscis; // длинный хоботок, которым они пользуются для высасывания нектара растений
    this.antennae = antennae; //  усики (или антенны, сяжки), каждый из которых состоит из 13 сегментов у самцов и 12 сегментов у самок
    }
}
animalia1 = new Animalia();
arthropoda1 = new Arthropoda();
insecta1 = new Insecta();
hymenoptera1 = new Hymenoptera();
apocrita1 = new Apocrita
anthophila1 = new Anthophila();
console.log(animalia1, arthropoda1, insecta1, hymenoptera1, apocrita1, anthophila1);
