export default function() {
	this.transition(this.toValue((toValue, fromValue) => {
		return !fromValue || toValue > fromValue;
	}), this.use('afterAnimate', 'toLeft'), this.reverse('afterAnimate', 'toRight'));
}
