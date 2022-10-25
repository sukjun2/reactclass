import React from "react";

function Text({ attr }) {
    return (
        <section id="textType" className={`text__wrap ${attr[0]} ${attr[1]} ${attr[2]} ${attr[3]} ${attr[4]}`}>
            <span>CHECKLIST</span>
            <h2 className="mb70">결혼 전 체크리스트</h2>
            <div className="text__inner">
                <article className="text t1">
                    <h3 className="text__title">생활 패턴</h3>
                    <p className="text__desc">평소에 집에 몇 시쯤 들어와? 침대에 안 씻고 누워도 돼? 정리정돈에 철저한 편이야? 집에 친구들 부르는 거 좋아해?</p>
                    <a className="text_btn" href="/">
                        더보기
                    </a>
                </article>
                <article className="text t2">
                    <h3 className="text__title">가사 노동</h3>
                    <p className="text__desc">집안일을 어떻게 나눠야 할까? 아이가 생기면 어떻게 나누지? '이런 건 남자가/여자가'라고 생각하는 일 있어?</p>
                    <a className="text_btn" href="/">
                        더보기
                    </a>
                </article>
                <article className="text t3">
                    <h3 className="text__title">친구 관계</h3>
                    <p className="text__desc">친구가 밤늦게 부르면 나갔다 와도 돼? 우리의 결혼기념일이 친구들 여행과 겹친다면? 이성 친구와 계속 연락해도 괜찮아?</p>
                    <a className="text_btn" href="/">
                        더보기
                    </a>
                </article>
                <article className="text t4">
                    <h3 className="text__title">가족 문제</h3>
                    <p className="text__desc">평소에 부모님이 네게 간섭을 많이 하셔? 너희 부모님께서 내게 기대하시는 점 있어? 부모님을 얼마나 자주 찾아 뵈어야 할까?</p>
                    <a className="text_btn" href="/">
                        더보기
                    </a>
                </article>
                <article className="text t5">
                    <h3 className="text__title">직업과 커리어</h3>
                    <p className="text__desc">지금 하는 일은 너의 커리어야? 아니면 그저 돈벌이? 얼마나 오래 일하고 싶어? 지금 직업(직장) 말고 꼭 해보고 싶은 일 있어?</p>
                    <a className="text_btn" href="/">
                        더보기
                    </a>
                </article>
                <article className="text t6">
                    <h3 className="text__title">종교</h3>
                    <p className="text__desc">가족약속과 종교활동이 겹치면? 꼭 종교가 같아야해? 생활에 종교가 적용되는 부분이 있어? 너한테 종교는 얼마나 큰 부분이야?</p>
                    <a className="text_btn" href="/">
                        더보기
                    </a>
                </article>
            </div>
        </section>
    );
}

export default Text;
