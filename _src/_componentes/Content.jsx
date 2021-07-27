import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { styles } from '../_styles/Style';
import Informacoes from '../_componentes/Informacoes';
import Imc from '../_componentes/Imc';
import Saudacao from '../_componentes/Saudacao'
import InfoAtividade from '../_componentes/InfoAtividade'


export default function Content() {
    return (
      
        <ScrollView >

            <View style={styles.caixaSaudacao}>
                <Saudacao />
            </View>

            <View style={styles.viewContent}>
                <View style={styles.viewBorder}>
                    <Informacoes titulo='Saúde' autor='Nestlé Brasil' conteudo='Que saúde é tudo na vida da gente, isso não podemos negar. O lado bom da coisa é que a comidinha que você tanto ama pode te ajudar a blindar o sistema imunológico e ainda dar um up no funcionamento do organismo. Partiu conhecer como tudo isso acontece?' />
                </View >

                <View style={styles.viewBorder}>
                    <Informacoes titulo='O que é IMC e por que ele não te define?' autor='Que Bem me faz' conteudo='Na hora de subir na balança da farmácia a gente clama ao universo para não ter nenhuma surpresa. A verdade é que a neura do peso ainda é algo recorrente. O tal do IMC - índice de massa corporal -, foi e ainda é visto como um indicativo de saúde. Mas será que um cálculo entre peso e altura diz tanto a respeito da saúde de uma pessoa?
                    O objetivo do IMC é identificar, por meio de uma fórmula matemática, se você está com o peso adequado para sua altura ou se apresenta magreza, sobrepeso ou obesidade. Para calcular o IMC é preciso dividir o seu peso pela altura elevada ao quadrado: IMC = Peso ÷ (Altura × Altura). Exemplo: se você pesa 65 kg e tem 1,62m de altura, ficaria 65 / (1,62 x 1,62) = 24.8. Se o resultado ficar entre 18.5 e 24.9 é considerado normal. Caso seja menor que 18.5, é magreza. Entre 25 e 29.9 é sobrepeso e entre 30 e 39.9, obesidade. Acima disso é chamado de obesidade mórbida.' />
                    <Image style={styles.img} source={require('../_img/obesos.jpg')}/>
                </View>

                <View style={styles.viewBorder}>
                    <Informacoes titulo='Peso ideal existe?' autor='Que Bem me faz' conteudo='Essa ideia de que existe um IMC, peso e até dieta ideal é cilada. O seu corpo é único, porque cada ser humano tem sua carga genética e hormonal e estrutura corporal. Os indicadores, sejam quais forem, são válidos para obter informações sobre o funcionamento do organismo, não para ditar regras e dar rótulos.
                    O interesse pela própria saúde é ótimo e importante, principalmente com acompanhamento médico. Vale lembrar que um número, preconceitos ou soluções milagrosas sem embasamento científico não definem o que é saudável. Melhor do que um índice sozinho é conhecer seu corpo e cuidar de você com carinho.' />
                    <Image style={styles.img} source={require('../_img/balanca.jpg')}/>
                </View>
            </View>
            <View style={styles.caixaImc}>
                <Imc />
            </View>
            <View style={styles.viewContent}>
                <View style={styles.viewBorder}>
                    <InfoAtividade titulo="Qual a melhor atividade física?" conteudo="A escolha da atividade física é uma questão bem pessoal. Não existe um tipo de atividade física ideal para todo mundo. As preferências de cada indivíduo são fundamentais para a adesão e a continuidade da prática esportiva. Cada pessoa deve escolher o exercício de sua preferência para que haja motivação.
                    Às vezes, pode acontecer da pessoa não se adaptar de cara na primeira escolha, mas é importante não desistir de praticar atividade física e experimentar outras modalidades, até encontrar o que é mais prazeroso.
                    Pesquisa do Ministério do Esporte mostra que é comum abandonar os exercícios físicos, principalmente quando se tem entre 16 e 24 anos (45%). As maiores alegações para deixar de lado a atividade física foram a falta de tempo ou substituição por outras prioridades.
                    Sabendo disso, selecionamos 5 dicas para te motivar a não desistir. Estar em constante movimento é manter-se saudável. E saúde deve sempre ser uma prioridade. "
                    subTitulo1="1.Mantenha a hidratação" conteudo1="Consuma no mínimo dois litros de água diariamente. Hidrate-se antes, durante e depois do exercício físico."
                    subTitulo2="2.Proteja-se do sol" conteudo2="Evite a radiação solar. Pratique esporte nos horários adequados para não ter desidratação ou até mesmo câncer de pele. Faça uso de protetor solar sempre, mesmo se o dia estiver nublado. Abuse de viseiras, óculos escuros, roupas com proteção UHV e bonés."
                     subTitulo3="3.Vista-se adequadamente" conteudo3="Cada modalidade esportiva requer uma roupa especial. Uma vestimenta inadequada pode provocar danos como movimentos incorretos durante a atividade, má postura, dores e muito mais. Use sempre calçado confortável e roupas cômodas."
                   subTitulo4="4.Alongue-se" conteudo4="É importante fazer alongamento antes da atividade física, para preparar o corpo para o exercício, e depois, para eliminar a tensão que o esforço muscular gera."
                   subTitulo5="5.Não se automedique" conteudo5="É importante fazer alongamento antes da atividade física, para preparar o corpo para o exercício, e depois, para eliminar a tensão que o esforço muscular gera."/>
                    
               

                </View>
            </View>
            


        </ScrollView>

    )
}